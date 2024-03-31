import { notFound } from 'next/navigation'

import EditForm from '@/app/_features/article/EditForm'
import { fetchArticleById } from '@/lib/articles/fetchs'

type Props = {
  params: { id?: string }
}

export default async function Page({ params }: Props) {
  const article = await fetchArticleById(params.id ?? '')
  if (!article) {
    notFound()
  }

  return <EditForm article={article} />
}
