import { notFound } from 'next/navigation'

import ArticleBook from '@/app/_features/common/Book'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) {
    notFound()
  }

  return (
    <div className="flex flex-wrap gap-4 mt-4 items-center juzstify-center">
      {articles.map((article) => {
        return (
          <ArticleBook
            key={article.id}
            id={article.id}
            title={article.title}
            authorName={article.author?.name}
          />
        )
      })}
    </div>
  )
}
