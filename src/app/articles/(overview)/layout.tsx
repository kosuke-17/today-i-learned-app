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
      <p className="text-xl font-bold">Today I Learndで学んだ内容</p>
      <div className="w-full">{children}</div>
    </>
  )
}
