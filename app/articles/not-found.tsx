import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>記事の一覧データが見つかりませんでした.</p>
      <Link
        href="/articles"
        className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-600"
      >
        戻る
      </Link>

      <Link
        href="/articles/create"
        className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-600"
      >
        記事を作成
      </Link>
    </main>
  )
}
