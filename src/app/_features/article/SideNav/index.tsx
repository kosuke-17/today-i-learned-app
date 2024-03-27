import Link from 'next/link'

import _NavLink from '@/app/_features/article/_NavLink'
import type { ArticleSelectForNav } from '@/lib/articles/definitions'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function ArticleNavBar() {
  const articles: ArticleSelectForNav[] = await fetchArticlesForNav()
  return (
    <div className="animate-fade-in-left my-2 mx-1 rounded-md w-48 bg-primary text-center pt-4">
      <div>
        <Link
          href="/articles/create"
          className="bg-white bg-opacity-80 text-primary hover:text-primary-dark rounded-md p-1"
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
