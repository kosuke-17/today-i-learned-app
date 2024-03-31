import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getDynamicPath } from '@/constant/path'
import { fetchArticlesForNav } from '@/lib/articles/fetchs'

import './book.css'

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
    <Link
      className="p-4 w-[160px]"
      scroll={false}
      href={getDynamicPath({ key: 'ARTICLES', id })}
    >
      <div className="book">
        <div className="back"></div>
        <div className="page"></div>
        <div className="front text-white">
          <div className="groove"></div>
          <div className="gap-2">
            <span className="text-md block">{title}</span>
            <span className="text-xs block">{authorName}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
