import Link from 'next/link'

import { ArticleSelectForNav } from '@/lib/articles/definitions'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function ArticleNavBar() {
  const articles: ArticleSelectForNav[] = await fetchArticlesForNav()
  return (
    <nav className="h-full flex-1 bg-emerald-600">
      {articles.map((article) => (
        <div key={article.id} className="flex justify-center">
          <Link href={`/articles/${article.id}`}>{article.title}</Link>
        </div>
      ))}
    </nav>
  )
}
