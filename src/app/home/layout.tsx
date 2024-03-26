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
    <>
      <MainSideNav />
      <div className="ml-20 h-screen w-screen bg-gray-100">
        <div className="h-full flex-5">{children}</div>
      </div>
    </>
  )
}
