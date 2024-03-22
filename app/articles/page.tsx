import { redirect } from 'next/navigation'

import { fetchArticlesForNav } from '@/app/_lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  redirect(`/articles/${articles[0].id}`)
}
