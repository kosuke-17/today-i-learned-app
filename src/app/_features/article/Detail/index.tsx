import Markdown from '@/components/Markdown'
import { type ArticleSelect } from '@/lib/articles'

type Props = {
  article: ArticleSelect
}

export default async function Detail({ article }: Props) {
  return (
    <div className="flex gap-2 mx-40">
      <div className="flex-5 w-full h-full bg-white py-4 px-8 rounded-md">
        <div className="text-center mb-3 text-5xl font-bold">
          {article.title}
        </div>
        <Markdown content={article.content ? article.content : ''} />
      </div>
      <div className="flex-1 bg-white rounded-md pt-4"></div>
    </div>
  )
}
