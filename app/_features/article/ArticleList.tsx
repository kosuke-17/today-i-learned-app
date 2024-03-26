import Link from 'next/link'

import { ArticleSelectForNav } from '@/app/_lib/articles/definitions'
import { fetchArticlesForNav } from '@/app/_lib/articles/fetchs'

export default async function ArticleList() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) return <>記事が存在しません</>

  return (
    <div>
      <div className="bottom-1 flex justify-center text-4xl font-bold">
        記事一覧
      </div>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.id} />
      })}
    </div>
  )
}

function ArticleCard({ article }: { article: ArticleSelectForNav }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      {/* TODO: 絵文字入れたい */}
      <Link href={`/articles/${article.id}`}>
        <div className="px-6 py-4">
          <p className="text-3xl font-semibold">{article.title}</p>
        </div>
      </Link>
    </div>
  )
}
