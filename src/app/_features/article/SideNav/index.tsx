import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import _NavLink from '@/app/_features/article/_NavLink'
import Divider from '@/app/_features/layout/Divider'
import { PATH } from '@/constant/path'
import type { ArticleSelectForNav } from '@/lib/articles/definitions'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function ArticleNavBar() {
  const articles: ArticleSelectForNav[] = await fetchArticlesForNav()
  return (
    <div className="animate-fade-in-left rounded-md w-44 bg-primary-main text-center pt-4">
      <Link href={PATH.ARTICLES_CREATE} className="flex justify-center flex-1">
        <PlusIcon className="h-8 w-16 px-4 text-white hover:bg-primary-dark rounded-lg" />
      </Link>

      <Divider />

      <ul>
        {articles.map((article) => (
          <_NavLink id={article.id} name={article.title} key={article.id} />
        ))}
      </ul>
    </div>
  )
}
