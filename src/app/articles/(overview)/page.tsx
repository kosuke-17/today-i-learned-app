import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getViewPath } from '@/constant/path'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) {
    notFound()
  }

  return (
    <div className="flex gap-2 mt-4 items-start juzstify-center">
      {articles.map((article) => {
        return (
          <Link
            key={article.id}
            scroll={false}
            className="bg-white rounded-md p-4"
            href={getViewPath({ key: 'ARTICLES', id: article.id })}
          >
            {article.title}
          </Link>
        )
      })}
    </div>
  )
}
