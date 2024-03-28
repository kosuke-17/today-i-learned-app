'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

import { PATH } from '@/constant/path'
import { prisma } from '@/lib/prisma'
import { STATUS_CODE, StatusCodeType } from '@/lib/status-code'

const CHECKED_CHECKBOX = 'on'

const FormSchema = z.object({
  title: z.string().min(1, { message: '1文字以上入力してください' }),
  content: z.string().min(1, { message: '1文字以上入力してください' }),
  published: z
    .string()
    .nullable()
    .transform((v) => v === CHECKED_CHECKBOX),
  authorId: z.string().nullable(),
})

export type FormState = {
  errors?: {
    title?: string[]
    content?: string[]
    published?: string[]
    authorId?: string[]
  }
  message: string
  status: StatusCodeType | null
}

const validateFields = (formData: FormData, message: string) => {
  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    published: formData.get('published'),
    authorId: formData.get('authorId'),
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

export const createArticle = async (
  _: FormState,
  formData: FormData,
): Promise<FormState> => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  const message = 'Validation Error: 記事の作成に失敗しました'
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
      message: 'Not Found Error: 作成する記事データが送られてきませんでした',
      status: STATUS_CODE.NOT_FOUND,
    }

  try {
    await prisma.article.create({ data })

    revalidatePath(PATH.ARTICLES)
    return {
      message: 'Success: 記事を作成しました!!',
      status: STATUS_CODE.CREATED,
    }
  } catch (error) {
    return {
      message: 'Database Error: 記事作成に失敗しました',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
    }
  }
}

export const updateArticle = async (
  id: string,
  _: FormState,
  formData: FormData,
) => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  const message = 'Validation Error: 記事の更新に失敗しました'
  const validatedFields = validateFields(formData, message)

  if (validatedFields.isError) {
    return {
      errors: validatedFields.errors,
      message: validatedFields.message,
      status: STATUS_CODE.UNPROCESSABLE_ENTITY,
    }
  }

  const data = validatedFields.data
  if (!data)
    return {
      message: 'Not Found Error: 更新する記事データが送られてきませんでした',
      status: STATUS_CODE.NOT_FOUND,
    }

  try {
    await prisma.article.update({ where: { id }, data })

    revalidatePath(PATH.ARTICLES)
    return {
      message: 'Success: 記事を更新しました!!',
      status: STATUS_CODE.CREATED,
    }
  } catch (error) {
    return {
      message: 'Database Error: 記事更新に失敗しました',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
    }
  }
}

export const deleteArticle = async (id: string) => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  try {
    await prisma.article.delete({ where: { id } })

    revalidatePath(PATH.ARTICLES)
    return {
      message: 'Success: 記事を削除しました!!',
      status: STATUS_CODE.CREATED,
    }
  } catch (error) {
    return {
      message: 'Database Error: 記事削除に失敗しました',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
    }
  }
}
