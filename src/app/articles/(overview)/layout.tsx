import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '記事一覧',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div>Today I Learndで学んだ内容を投稿</div>
      <div>{children}</div>
    </>
  )
}
