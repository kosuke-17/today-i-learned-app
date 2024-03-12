import { ArticleSelect } from '@/app/lib/articles/definitions'
import { fetchArticles } from '@/app/lib/articles/fetchs'
import { formatYYYYMMDD } from '@/lib/date'

export default async function ArticleList() {
  const articles = await fetchArticles()

  if (!articles.length) return <>記事が存在しません</>

  return (
    <div>
      <div className="bottom-1 flex justify-center text-4xl font-bold">
        記事一覧
      </div>
      {articles.map((article) => {
        return <Article article={article} key={article.id} />
      })}
    </div>
  )
}

const Article = ({ article }: { article: ArticleSelect }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      {/* TODO: 絵文字入れたい */}
      <div className="px-6 py-4">
        <p className="text-3xl font-semibold">{article.title}</p>
        <div>{formatYYYYMMDD(article.createdAt)}</div>
        <div>{article.author?.name}</div>
      </div>
    </div>
  )
}
