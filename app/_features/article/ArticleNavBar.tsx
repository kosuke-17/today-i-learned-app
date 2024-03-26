import Link from 'next/link'

import { ArticleSelectForNav } from '@/app/_lib/articles/definitions'
import { fetchArticlesForNav } from '@/app/_lib/articles/fetchs'

const ArticleNavBar = async () => {
  const articles: ArticleSelectForNav[] = await fetchArticlesForNav()
  return (
    <nav className="h-full flex-1">
      <div className="bg-slate-300 m-2 h-full">
        {articles.map((article) => (
          <div key={article.id} className="flex justify-center">
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default ArticleNavBar
