'use server'

import { z } from 'zod'

import { prisma } from '@/lib/prisma'
import { STATUS_CODE, StatusCodeType } from '@/lib/status-code'

const formSchema = z.object({
  name: z.string().min(1, { message: '1文字以上入力してください' }),
  email: z.string().min(1, { message: '1文字以上入力してください' }),
  password: z.string().min(1, { message: '1文字以上入力してください' }),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
  message: string
  status: StatusCodeType | null
}

const validateFields = (formData: FormData, message: string) => {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      isError: true,
      errors: validatedFields.error.flatten().fieldErrors,
      message,
      status: STATUS_CODE.UNPROCESSABLE_ENTITY,
    }
  }

  return {
    isError: false,
    data: validatedFields.data,
    message: '', // TODO: 削除
  }
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

  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
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
