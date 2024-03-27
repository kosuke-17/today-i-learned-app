import type { Metadata } from 'next'

import ArticleSideNav from '@/app/_features/article/SideNav'
import Content from '@/app/_features/common/Content'
import Main from '@/app/_features/common/Main'
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
    <Main>
      <MainSideNav />
      <ArticleSideNav />
      <Content>{children}</Content>
    </Main>
  )
}
