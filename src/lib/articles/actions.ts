'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

const FormSchema = z.object({
  title: z.string({
    invalid_type_error: 'タイトルを入力してください',
  }),
  content: z.string().nullable(),
  published: z.string().nullable(), // TODO : Booleanにしたい
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
    }
  }

  const data = validatedFields.data
  if (!data) return { message: 'Data is nothing on createArticle' }

  try {
    await prisma.article.create({
      // TODO: 修正必要.onはcheckboxがチェックついていれば渡ってくる、チェックついていなければnull
      data: { ...data, published: data.published === 'on' },
    })

    redirect('/articles')
  } catch (error) {
    return { message: 'Database Error: Failed to Create Article.' }
  }
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
    }
  }

  const data = validatedFields.data
  if (!data) return { message: 'Data is nothing on updateArticle' }

  try {
    await prisma.article.update({
      where: { id },
      data: { ...data, published: data.published === 'on' },
    })
    redirect('/articles')
  } catch (error) {
    return { message: 'Database Error: Failed to Update Article.' }
  }
}

export const deleteArticle = async (id: string) => {
  // TODO: NextAuthを用いて、getServerSessionを実装
  try {
    await prisma.article.delete({ where: { id } })
    redirect('/articles')
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Article.' }
  }
}