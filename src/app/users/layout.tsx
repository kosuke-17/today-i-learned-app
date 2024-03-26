import type { Metadata } from 'next'

import MainSideNav from '@/app/_features/common/MainSideNav'

export const metadata: Metadata = {
  title: 'ユーザー一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen w-screen flex">
      <MainSideNav />
      <div className="flex-8 my-2 mx-1">{children}</div>
    </div>
  )
}
