import type { Metadata } from 'next'

import ArticleSideNav from '@/app/_features/article/SideNav'
import SideNav from '@/app/_features/common/MainSideNav'

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
      <SideNav />
      <div className="ml-20 h-screen w-screen border-l-white border-l-[1px] flex">
        <ArticleSideNav />
        <div className="w-full flex-5">{children}</div>
      </div>
    </>
  )
}
