import type { Metadata } from 'next'

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
    <div className="h-screen w-screen flex bg-gray-200">
      <MainSideNav />
      <div className="flex-5">{children}</div>
    </div>
  )
}
