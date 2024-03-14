import { Article, Prisma, User } from '@prisma/client'

export type ArticleSelectForNav = Pick<Article, 'id' | 'title'>
export const selectArticleForNav = Prisma.validator<Prisma.ArticleSelect>()({
  id: true,
  title: true,
})

export type ArticleSelect = Omit<Article, 'authorId'> & {
  author: { name: User['name'] } | null
}
export const selectArticle = Prisma.validator<Prisma.ArticleSelect>()({
  id: true,
  createdAt: true,
  title: true,
  content: true,
  published: true,
  author: {
    select: {
      name: true,
    },
  },
})

export type ArticleCreate = Omit<Article, 'id' | 'createdAt'>
export type ArticleUpdate = ArticleCreate
