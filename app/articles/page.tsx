import { redirect } from 'next/navigation'

import { fetchArticlesForNav } from '@/app/lib/articles/fetchs'

const Page = async () => {
  const articles = await fetchArticlesForNav()

  redirect(`/articles/${articles[0].id}`)
}

export default Page
