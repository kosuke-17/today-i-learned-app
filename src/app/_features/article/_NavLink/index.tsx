'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import ActionDots from '@/components/ActionDots'
import { getDynamicPath } from '@/constant/path'

type Props = {
  id: string
  name: string
}

export default function _NavLink({ id, name }: Props) {
  const [isShowDots, setShowDots] = useState(false)
  const hrefDetail = getDynamicPath({ key: 'ARTICLES', id })
  const hrefEdit = getDynamicPath({ key: 'ARTICLES', id, suffix: 'edit' })
  const pathName = usePathname()
  const isCurrentPath = pathName === hrefDetail
  const showDots = () => {
    setShowDots(true)
  }

  const hideDots = () => {
    setShowDots(false)
  }

  return (
    <li
      className={clsx(
        'flex justify-between gap-2 px-4 rounded-md text-white w-full my-0.5',
        isCurrentPath ? 'bg-primary-dark' : 'hover:bg-primary-dark',
      )}
      onMouseOver={showDots}
      onMouseLeave={hideDots}
    >
      <Link href={hrefDetail} className="truncate flex-1">
        {name}
      </Link>

      {isShowDots && (
        <ActionDots
          id={id}
          tooltipNode={(onClose) => (
            <Link href={hrefEdit} onClick={onClose}>
              編集
            </Link>
          )}
        />
      )}
    </li>
  )
}
