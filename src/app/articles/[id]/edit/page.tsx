import { notFound } from 'next/navigation'

import EditForm from '@/app/_features/article/EditForm'
import { fetchArticleById } from '@/lib/articles/fetchs'
import { fetchLoginUser } from '@/lib/auth'

type Props = {
  params: { id?: string }
}

export default async function Page({ params }: Props) {
  const loginUser = await fetchLoginUser()
  const article = await fetchArticleById(params.id ?? '')
  if (!article) {
    notFound()
  }

  return <EditForm loginUser={loginUser} article={article} />
}
