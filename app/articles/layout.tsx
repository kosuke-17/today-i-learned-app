import type { Metadata } from 'next'

import Header from '@/app/features/common/Header'

export const metadata: Metadata = {
  title: '記事一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      {children}
    </div>
  )
}
