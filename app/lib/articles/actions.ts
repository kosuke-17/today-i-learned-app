import { prisma } from '@/lib/prisma'
import { ArticleCreate } from './definitions'
import { z } from 'zod'

const FormSchema = z.object({
  title: z.string({
    invalid_type_error: 'タイトルを入力してください',
  }),
  content: z.string().nullable(),
  published: z.boolean(),
  authorId: z.string().nullable(),
})

export const createArticle = async (formData: FormData) => {
  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Article.',
    }
  }

  const data: ArticleCreate = validatedFields.data

  await prisma.article.create({ data })
}
