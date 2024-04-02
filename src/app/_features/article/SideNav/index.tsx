import { DocumentPlusIcon } from '@heroicons/react/24/outline'

import _NavLink from '@/app/_features/article/_NavLink'
import Divider from '@/app/_features/layout/Divider'
import Link from '@/components/Link'
import { PATH } from '@/constant/path'
import type { ArticleSelectForNav } from '@/lib/articles/definitions'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

const CreateNav = (
  <div className="flex items-center px-8 w-full gap-2 text-white hover:bg-primary-dark rounded-lg">
    <DocumentPlusIcon className="h-5 w-5" />
    作成
  </div>
)

export default async function ArticleNavBar() {
  const articles: ArticleSelectForNav[] = await fetchArticlesForNav()
  return (
    <div className="animate-fade-in-left rounded-md w-44 bg-primary-main text-center pt-4">
      <Link textNode={CreateNav} href={PATH.ARTICLES_CREATE} className="" />

      <Divider />

      <ul>
        {articles.map((article) => (
          <_NavLink id={article.id} name={article.title} key={article.id} />
        ))}
      </ul>
    </div>
  )
}
