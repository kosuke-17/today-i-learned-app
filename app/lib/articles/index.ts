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
