import ArticleList from '@/app/features/article/ArticleList'

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ArticleList />
    </main>
  )
}
