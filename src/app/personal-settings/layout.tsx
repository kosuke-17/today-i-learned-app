import type { Metadata } from 'next'

import Content from '@/app/_features/common/Content'
import Main from '@/app/_features/common/Main'
import MainSideNav from '@/app/_features/common/MainSideNav'

export const metadata: Metadata = {
  title: '個人設定一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Main>
      <MainSideNav />
      <Content>{children}</Content>
    </Main>
  )
}
