import { Article, Prisma, User } from '@prisma/client'

export type ArticleSelect = Article & { author: Pick<User, 'name'> | null }
export const selectArticle = Prisma.validator<Prisma.ArticleSelect>()({
  id: true,
  title: true,
  content: true,
  authorId: true,
  published: true,
  author: {
    select: {
      name: true,
    },
  },
})

export type ArticleCreate = Omit<Article, 'id'>
export type ArticleUpdate = ArticleCreate
