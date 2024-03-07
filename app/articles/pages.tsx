import { fetchArticles } from '@/app/lib/articles'
import { ArticleSelect } from '@/app/lib/articles/defs'

export default async function ArticleList() {
  const articles = await fetchArticles()
  return (
    <div>
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
