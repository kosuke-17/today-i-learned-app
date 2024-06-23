import { notFound } from 'next/navigation'

import Detail from '@/app/_features/article/Detail'
import ModalView from '@/components/ModalView'
import { fetchArticleById } from '@/lib/articles'

type Props = {
  params: { id: string }
}

export default async function ModalPage({ params }: Props) {
  const article = await fetchArticleById(params.id)

  if (!article) {
    notFound()
  }

  return <ModalView content={<Detail article={article} />} />
}
