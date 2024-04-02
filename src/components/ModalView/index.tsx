'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import Overlay from '@/components/Overlay'

type Props = {
  content: ReactNode
}

export default function ModalView({ content }: Props) {
  /**
   * Parallel RouteとIntercepting Routeによるモーダルのバグを修正
   */
  const pathname = usePathname()
  if (!pathname.includes('view')) return null

  return (
    <div className="fixed left-0 top-0 z-10 grid h-full w-full place-items-center">
      <Overlay />
      <div className="bg-white rounded-lg mx-60 overflow-scroll max-h-[500px] z-10">
        {content}
      </div>
    </div>
  )
}
