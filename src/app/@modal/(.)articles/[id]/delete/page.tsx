import { notFound } from 'next/navigation'

import ModalDelete from '@/components/ModalDelete'
import { fetchArticleById } from '@/lib/articles/fetchs'

type Props = {
  params: { id: string }
}

export default async function ModalPage({ params }: Props) {
  const article = await fetchArticleById(params.id)
  if (!article) {
    notFound()
  }

  return <ModalDelete article={article} />
}
