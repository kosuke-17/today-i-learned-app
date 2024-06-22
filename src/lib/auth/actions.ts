'use server'

import { Secret } from '@prisma/client'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'
import { STATUS_CODE, StatusCodeType } from '@/lib/status-code'
import { findUserById, findUserForLogin } from '@/lib/users/actions'
import { Token, genToken } from '@/lib/uuid'

import { validateFields } from './validation'

export type FormState = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  message: string
  status: StatusCodeType | null
  data?: {
    user: {
      name: string
    } | null
  }
}

const { OK, BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } = STATUS_CODE

export const loginUser = async (_: FormState, formData: FormData) => {
  const message = 'Validation Error: ログインに失敗しました'
  const validatedFields = validateFields(formData, message)

  if (validatedFields.isError) {
    const { errors, message } = validatedFields
    return { errors, message, status: BAD_REQUEST }
  }

  const { data } = validatedFields

  try {
    const loginUser = await findUserForLogin({
      email: data?.email,
      password: data?.password,
    })

    if (!loginUser) {
      return {
        message: 'Unauthorized Error: ログインに失敗しました',
        status: UNAUTHORIZED,
      }
    }

    const token = genToken()

    updateToken({ id: loginUser.secret?.id, token })
    resetSessionCookies({ name: 'sessionToken', token })

    const userData = await findUserById({ id: loginUser.id })

    return {
      message: 'Success: ログインに成功しました!!',
      status: OK,
      data: { user: userData },
    }
  } catch (error) {
    return {
      message: 'Database Error: ログインに失敗しました',
      status: INTERNAL_SERVER_ERROR,
    }
  }
}

const updateToken = async ({
  id,
  token,
}: {
  id?: Secret['id']
  token: Token
}) => {
  try {
    await prisma.secret.update({
      where: { id },
      data: { token },
    })
  } catch (error) {
    return {
      message: 'Database Error: Secretの更新に失敗しました',
      status: INTERNAL_SERVER_ERROR,
    }
  }
}

const resetSessionCookies = ({
  name,
  token,
}: {
  name: string
  token: Token
}) => {
  const sessionToken = cookies().get(name)

  if (sessionToken) {
    cookies().delete(name)
    cookies().set({
      name,
      value: token,
      httpOnly: true,
    })
  } else {
    cookies().set({
      name,
      value: token,
      httpOnly: true,
    })
  }
}
