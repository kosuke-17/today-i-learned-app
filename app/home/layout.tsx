import type { Metadata } from 'next'

import ArticleNavBar from '@/app/_features/article/ArticleNavBar'
import MainSideNav from '@/app/_features/common/MainSideNav'

export const metadata: Metadata = {
  title: 'ホーム',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainSideNav />
      <div className="h-screen w-screen flex bg-gray-100">
        <ArticleNavBar />
        <div className="w-full flex-5">{children}</div>
      </div>
    </>
  )
}
