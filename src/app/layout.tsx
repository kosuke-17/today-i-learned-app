import type { Metadata } from 'next'
import { ReactNode } from 'react'

import ToastProvider from '@/components/Toast/Provider'

import TSQLayout from './_features/layout/TSQLayout'
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
        <TSQLayout>
          <ToastProvider>
            {children}
            {modal}
          </ToastProvider>
        </TSQLayout>
      </body>
    </html>
  )
}
