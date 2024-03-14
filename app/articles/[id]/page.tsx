import { notFound } from 'next/navigation'

import { fetchArticleById } from '@/app/lib/articles/fetchs'

type Props = {
  params: { id: string }
}

const ArticlePage = async ({ params }: Props) => {
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

export default ArticlePage
