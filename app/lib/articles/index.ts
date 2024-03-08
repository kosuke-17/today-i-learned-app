import { prisma } from '@/lib/prisma'
import { ArticleSelect, selectArticle } from './defs'

export const fetchArticles = async () => {
  try {
    const articles: ArticleSelect[] = await prisma.article.findMany({
      select: selectArticle,
    })

    return articles
  } catch (e) {
    console.error('Database Error:', e)
    throw new Error('Failed to fetch aritcles.')
  }
}

export const fetchArticleById = async (id: string) => {
  try {
    const article: ArticleSelect | null = await prisma.article.findFirst({
      where: { id },
      select: selectArticle,
    })

    return article
  } catch (e) {
    console.error('Database Error:', e)
    throw new Error('Failed to fetch aritcle.')
  }
}
