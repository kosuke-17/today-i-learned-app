import Link from 'next/link'
import { notFound } from 'next/navigation'

import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) {
    notFound()
  }

  return (
    <div className="flex flex-1 mt-4 items-start juzstify-center">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-md p-4">
          <Link href={`/articles/${article.id}`}>{article.title}</Link>
        </div>
      ))}
    </div>
  )
}
