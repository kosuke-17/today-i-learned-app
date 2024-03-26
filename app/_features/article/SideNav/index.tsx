import Link from 'next/link'

import { ArticleSelectForNav } from '@/app/_lib/articles/definitions'
import { fetchArticlesForNav } from '@/app/_lib/articles/fetchs'

const ArticleNavBar = async () => {
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

export default ArticleNavBar
