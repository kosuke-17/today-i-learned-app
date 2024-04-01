'use client'

import { usePathname } from 'next/navigation'

import Overlay from '@/components/Overlay'
import { ArticleSelect } from '@/lib/articles/definitions'

type Props = {
  article: ArticleSelect
}

export default function ModalView({ article }: Props) {
  /**
   * Parallel RouteとIntercepting Routeによるモーダルのバグを修正
   */
  const pathname = usePathname()
  if (!pathname.includes('view')) return null

  return (
    <div className="fixed left-0 top-0 z-10 grid h-full w-full place-items-center">
      <Overlay />
      <div className="bg-white w-40 z-10 h-40">{article.title}</div>
    </div>
  )
}
