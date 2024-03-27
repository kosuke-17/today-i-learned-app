'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { PATH } from '@/constant/path'
import { prisma } from '@/lib/prisma'

const CHECKED_CHECKBOX = 'on'

const FormSchema = z.object({
  title: z.string({
    invalid_type_error: 'タイトルを入力してください',
  }),
  content: z.string().nullable(),
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
  message?: string | null
  status: 400 | 404 | 500 | null
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
      status: 400,
    }
  }

  return {
    isError: false,
    data: validatedFields.data,
  }
}

export const createArticle = async (
  _: FormState,
  formData: FormData,
): Promise<FormState> => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  const message = 'Missing Fields. Failed to Create Article.'
  const validatedFields = validateFields(formData, message)

  if (validatedFields.isError) {
    return {
      errors: validatedFields.errors,
      message: validatedFields.message,
      status: 400,
    }
  }

  const data = validatedFields.data
  if (!data) return { message: 'Data is nothing on createArticle', status: 404 }

  try {
    await prisma.article.create({ data })

    revalidatePath(PATH.ARTICLES)
  } catch (error) {
    return { message: 'Database Error: Failed to Create Article.', status: 500 }
  }

  redirect(PATH.ARTICLES)
}

export const updateArticle = async (
  id: string,
  _: FormState,
  formData: FormData,
) => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  const message = 'Missing Fields. Failed to Update Article.'
  const validatedFields = validateFields(formData, message)

  if (validatedFields.isError) {
    return {
      errors: validatedFields.errors,
      message: validatedFields.message,
      status: 400,
    }
  }

  const data = validatedFields.data
  if (!data) return { message: 'Data is nothing on updateArticle', status: 404 }

  try {
    await prisma.article.update({ where: { id }, data })

    revalidatePath(PATH.ARTICLES)
  } catch (error) {
    return { message: 'Database Error: Failed to Update Article.', status: 500 }
  }

  redirect(PATH.ARTICLES)
}

export const deleteArticle = async (id: string) => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  try {
    await prisma.article.delete({ where: { id } })

    revalidatePath(PATH.ARTICLES)
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Article.', status: 500 }
  }

  redirect(PATH.ARTICLES)
}
