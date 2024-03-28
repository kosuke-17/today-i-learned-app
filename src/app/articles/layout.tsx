import type { Metadata } from 'next'

import ArticleSideNav from '@/app/_features/article/SideNav'
import Content from '@/app/_features/common/Content'
import Main from '@/app/_features/common/Main'
import MainSideNav from '@/app/_features/common/MainSideNav'
import ToastProvider from '@/components/Toast/Provider'

export const metadata: Metadata = {
  title: '記事一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ToastProvider>
      <Main>
        <MainSideNav />
        <ArticleSideNav />
        <Content>{children}</Content>
      </Main>
    </ToastProvider>
  )
}
