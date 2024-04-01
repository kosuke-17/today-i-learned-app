import { notFound } from 'next/navigation'

import ModalView from '@/components/ModalView'
import { fetchArticleById } from '@/lib/articles/fetchs'

type Props = {
  params: { id: string }
}

export default async function ModalPage({ params }: Props) {
  const article = await fetchArticleById(params.id)

  if (!article) {
    notFound()
  }

  return <ModalView article={article} />
}
