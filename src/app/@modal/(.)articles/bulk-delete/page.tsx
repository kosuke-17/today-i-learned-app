import BulkDeleteForm from '@/app/_features/article/BulkDeleteForm'
import { fetchArticlesForNav } from '@/lib/articles'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  return <BulkDeleteForm articles={articles} />
}
