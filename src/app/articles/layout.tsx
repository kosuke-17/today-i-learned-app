import type { Metadata } from 'next'

import ArticleSideNav from '@/app/_features/article/SideNav'
import ContentWrapper from '@/app/_features/layout/ContentWrapper'
import Main from '@/app/_features/layout/Main'
import MainSideNav from '@/app/_features/layout/MainSideNav'

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
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
  )
}
