import { notFound } from 'next/navigation'

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
      <div className="flex-5 w-full h-full bg-white p-4 rounded-md">
        <div className="bg-gray-200 text-center mb-3 text-3xl font-bold">
          {article.title}
        </div>
        <div className="bg-gray-100">
          <div>{article.content}</div>
          <div>{article.content}</div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-md pt-4"></div>
    </div>
  )
}
