import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getDynamicPath } from '@/constant/path'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

export default async function Page() {
  const articles = await fetchArticlesForNav()

  if (!articles.length) {
    notFound()
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4 items-start juzstify-center">
      {articles.map((article) => {
        return (
          <Book
            key={article.id}
            id={article.id}
            title={article.title}
            authorName={article.author?.name}
          />
        )
      })}
    </div>
  )
}

type Props = {
  id: string
  title: string
  authorName?: string
}

// CSSする
// 著者を引っ張ってくる
const Book = ({ id, title, authorName }: Props) => {
  return (
    <div className="bg-white rounded-md">
      <Link
        scroll={false}
        className="p-4"
        href={getDynamicPath({ key: 'ARTICLES', id })}
      >
        <span className="text-lg font-bold">{title}</span>
        <span className="text-md">{authorName}</span>
      </Link>
    </div>
  )
}
