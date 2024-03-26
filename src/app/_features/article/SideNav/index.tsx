import Link from 'next/link'

import _NavLink from '@/app/_features/article/_NavLink'
import type { ArticleSelectForNav } from '@/lib/articles/definitions'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function ArticleNavBar() {
  const articles: ArticleSelectForNav[] = await fetchArticlesForNav()
  return (
    <div className="my-2 mx-1 rounded-md w-48 bg-emerald-600 text-center pt-4">
      <div>
        <Link
          href="/articles/create"
          className="bg-white bg-opacity-80 text-emerald-500 hove:text-emerald-600 hover:bg-opacity-90 rounded-md p-1"
        >
          記事追加
        </Link>
      </div>

      <div className="border-[0.5px] border-gray-100 my-2 mx-8" />

      <ul>
        {articles.map((article) => (
          <_NavLink
            name={article.title}
            key={article.id}
            href={`/articles/${article.id}`}
          />
        ))}
      </ul>
    </div>
  )
}
