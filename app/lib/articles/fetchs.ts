import { ArticleSelect, selectArticle } from '@/app/lib/articles/definitions'
import { prisma } from '@/lib/prisma'

export const fetchArticles = async (): Promise<ArticleSelect[]> => {
  try {
    const articles = await prisma.article.findMany({
      select: selectArticle,
    })

    return articles
  } catch (e) {
    console.error('Database Error:', e)
    throw new Error('Failed to fetch aritcles.')
  }
}

export const fetchArticleById = async (
  id: string,
): Promise<ArticleSelect | null> => {
  try {
    const article = await prisma.article.findFirst({
      where: { id },
      select: selectArticle,
    })

    return article
  } catch (e) {
    console.error('Database Error:', e)
    throw new Error('Failed to fetch aritcle.')
  }
}
