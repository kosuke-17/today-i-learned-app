import { Metadata } from 'next'

import CreateForm from '@/app/_features/article/CreateForm'
import { fetchLoginUser } from '@/lib/auth'

export const metadata: Metadata = {
  title: '記事作成',
}

export default async function Page() {
  const loginUser = await fetchLoginUser()
  return <CreateForm loginUser={loginUser} />
}
