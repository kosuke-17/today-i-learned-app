import type { Metadata } from 'next'
import { ReactNode } from 'react'

import ToastProvider from '@/components/Toast/Provider'

import './globals.css'

export const metadata: Metadata = {
  title: 'ホーム',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode
  modal: ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <ToastProvider>
          {children}
          {modal}
        </ToastProvider>
      </body>
    </html>
  )
}
