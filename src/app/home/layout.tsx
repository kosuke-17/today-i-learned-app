import type { Metadata } from 'next'

import ContentWrapper from '@/app/_features/layout/ContentWrapper'
import Main from '@/app/_features/layout/Main'
import MainSideNav from '@/app/_features/layout/MainSideNav'

export const metadata: Metadata = {
  title: 'ホーム',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Main>
      <MainSideNav />
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
  )
}
