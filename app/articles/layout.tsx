import type { Metadata } from 'next'

import ArticleNavBar from '@/app/features/article/ArticleNavBar'

export const metadata: Metadata = {
  title: '記事一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen w-screen flex bg-gray-100">
      <ArticleNavBar />
      <div className="w-full">{children}</div>
    </div>
  )
}
