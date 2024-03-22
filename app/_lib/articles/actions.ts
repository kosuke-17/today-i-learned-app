import { z } from 'zod'

import { prisma } from '@/lib/prisma'

const FormSchema = z.object({
  title: z.string({
    invalid_type_error: 'タイトルを入力してください',
  }),
  content: z.string().nullable(),
  published: z.boolean(),
  authorId: z.string().nullable(),
})

type State = {
  fieldErrors: {
    title?: string[] | undefined
    content?: string[] | undefined
    published?: string[] | undefined
    authorId?: string[] | undefined
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

export const createArticle = async (_: State, formData: FormData) => {
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
    await prisma.article.create({ data })

    return { message: 'Created Article.' }
  } catch (error) {
    return { message: 'Database Error: Failed to Create Article.' }
  }
}

export const updateArticle = async (
  id: string,
  _: State,
  formData: FormData,
) => {
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
    await prisma.article.update({ where: { id }, data })
    return { message: 'Updated Article' }
  } catch (error) {
    return { message: 'Database Error: Failed to Update Article.' }
  }
}

export const deleteArticle = async (id: string) => {
  try {
    await prisma.article.delete({ where: { id } })
    return { message: 'Deleted Article.' }
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Article.' }
  }
}
