import { notFound } from 'next/navigation'

import Markdown from '@/components/Markdown'
import { fetchArticleById } from '@/lib/articles/fetchs'

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  const article = await fetchArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex h-full gap-2 mx-40">
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
