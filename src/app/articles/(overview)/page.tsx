import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PATH } from '@/constant/path'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) {
    notFound()
  }

  return (
    <div className="flex gap-2 mt-4 items-start juzstify-center">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-md p-4">
          <Link href={`${PATH.ARTICLES}/${article.id}`}>{article.title}</Link>
        </div>
      ))}
    </div>
  )
}
