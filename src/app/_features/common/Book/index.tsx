import Link from 'next/link'

import { getDynamicPath } from '@/constant/path'

import './book.css'

type Props = {
  id: string
  title: string
  authorName?: string
}

export default function Book({ id, title, authorName }: Props) {
  return (
    <Link
      className="w-[120px]"
      scroll={false}
      href={getDynamicPath({ key: 'ARTICLES', id })}
    >
      <div className="book">
        <div className="back"></div>
        <div className="page"></div>
        <div className="front text-white">
          <div className="groove"></div>
          <div className="gap-2 mt-2 ml-4">
            <span className="text-md block">{title}</span>
            <span className="text-xs block">{authorName}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
