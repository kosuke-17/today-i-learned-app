import Link from 'next/link'

import { fetchArticles } from '@/app/lib/articles/fetchs'

const ArticleNavBar = async () => {
  const articles = await fetchArticles()
  return (
    <nav className="h-full flex-1">
      <p className="bg-slate-300 rounded-md m-2 py-8 px-4 flex justify-center">
        毎日学習記録
      </p>
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
