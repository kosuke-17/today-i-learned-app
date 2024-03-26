import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'ホーム',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-200">{children}</body>
    </html>
  )
}
