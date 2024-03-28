import { notFound } from 'next/navigation'

import { fetchArticleById } from '@/lib/articles/fetchs'

import ViewModal from './ViewModal'

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  const article = await fetchArticleById(params.id)

  if (!article) {
    notFound()
  }

  return <ViewModal article={article} />
}
