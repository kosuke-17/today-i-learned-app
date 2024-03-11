import { fetchArticles } from '@/app/lib/articles/fetchs'
import { ArticleSelect } from '@/app/lib/articles/definitions'

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
    <div>
      <div>タイトル: {article.title}</div>
      <div>内容: {article.content}</div>
      <div>著者: {article.author?.name}</div>
    </div>
  )
}
