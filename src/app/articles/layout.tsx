import type { Metadata } from 'next'

import ArticleSideNav from '@/app/_features/article/SideNav'
import MainSideNav from '@/app/_features/common/MainSideNav'

export const metadata: Metadata = {
  title: '記事一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="h-screen w-screen flex bg-gray-200">
        <MainSideNav />
        <ArticleSideNav />
        <div className="flex-8">{children}</div>
      </div>
    </>
  )
}
