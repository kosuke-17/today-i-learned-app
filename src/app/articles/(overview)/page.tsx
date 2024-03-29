import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getDynamicPath } from '@/constant/path'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) {
    notFound()
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4 items-start juzstify-center">
      {articles.map((article) => {
        return (
          <div key={article.id} className="bg-white rounded-md">
            <Link
              scroll={false}
              className="p-4"
              href={getDynamicPath({ key: 'ARTICLES', id: article.id })}
            >
              {article.title}
            </Link>
            <div>
              <Link
                scroll={false}
                href={getDynamicPath({
                  key: 'ARTICLES',
                  id: article.id,
                  suffix: 'edit',
                })}
              >
                編集する
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
