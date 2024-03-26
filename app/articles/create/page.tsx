import { Metadata } from 'next'

import CreateForm from '@/app/_features/article/CreateForm'

export const metadata: Metadata = {
  title: '記事作成',
}

export default async function Page() {
  return <CreateForm />
}
