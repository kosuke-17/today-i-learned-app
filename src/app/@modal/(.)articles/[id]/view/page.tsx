import { notFound } from 'next/navigation'

import ViewModal from '@/components/ViewModal'
import { fetchArticleById } from '@/lib/articles/fetchs'

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
