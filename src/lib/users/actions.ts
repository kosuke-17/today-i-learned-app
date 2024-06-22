'use server'

import { Secret, User } from '@prisma/client'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'
import { STATUS_CODE, StatusCodeType } from '@/lib/status-code'
import { genToken } from '@/lib/uuid'

import { selectUserForLogin } from './definitions'
import { validateFields } from './validation'

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
  message: string
  status: StatusCodeType | null
}

export const findUserForLogin = async ({
  email,
  password,
}: {
  email?: User['email']
  password?: Secret['password']
}) => {
  return await prisma.user.findFirst({
    select: selectUserForLogin,
    where: {
      email,
      secret: { password },
    },
  })
}

export const findUserById = async ({ id }: { id: User['id'] }) => {
  return await prisma.user.findFirst({
    where: { id },
    select: { name: true },
  })
}

export const createUser = async (_: FormState, formData: FormData) => {
  const message = 'Validation Error: ユーザー作成に失敗しました'
  const validatedFields = validateFields(formData, message)

  if (validatedFields.isError) {
    return {
      errors: validatedFields.errors,
      message: validatedFields.message,
      status: STATUS_CODE.BAD_REQUEST,
    }
  }

  const data = validatedFields.data

  if (!data)
    return {
      message: 'Unauthorized Error: ユーザー作成に失敗しました',
      status: STATUS_CODE.BAD_REQUEST,
    }
  // TODO: bcryptが使えないようなので、コメントアウト
  // const hash = await bcrypt.hash(data.password, 10)
  const token = genToken()

  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        secret: { create: { token, password: data.password } },
      },
    })

    cookies().set({
      name: 'sessionToken',
      value: token,
      httpOnly: true,
    })

    if (!user) {
      return {
        message: 'Bad Request Error: ユーザー作成に失敗しました',
        status: STATUS_CODE.UNAUTHORIZED,
      }
    }

    return {
      message: 'Success: ユーザー作成に成功しました!!',
      status: STATUS_CODE.SUCCESS,
    }
  } catch (error) {
    return {
      message: 'Database Error: ユーザー作成に失敗しました',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
    }
  }
}
