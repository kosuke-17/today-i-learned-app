import { notFound } from 'next/navigation'

import { fetchArticleById } from '@/app/_lib/articles/fetchs'

type Props = {
  params: { id: string }
}

export default async function ArticlePage({ params }: Props) {
  const article = await fetchArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <>
      <div>{article.title}</div>
    </>
  )
}
