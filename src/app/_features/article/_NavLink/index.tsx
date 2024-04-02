'use client'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import ActionDots from '@/components/ActionDots'
import Link from '@/components/Link'
import { getDynamicPath } from '@/constant/path'

import Actions from './Actions'

type Props = {
  id: string
  name: string
}

export default function _NavLink({ id, name }: Props) {
  const [isShowDots, setShowDots] = useState(false)
  const hrefDetail = getDynamicPath({ key: 'ARTICLES', id })
  const hrefEdit = getDynamicPath({ key: 'ARTICLES', id, suffix: 'edit' })
  const hrefDelete = getDynamicPath({ key: 'ARTICLES', id, suffix: 'delete' })
  const pathName = usePathname()
  const isCurrentPath = pathName === hrefDetail
  const showDots = () => {
    setShowDots(true)
  }

  const hideDots = () => {
    setShowDots(false)
  }

  const actions = [
    {
      text: '編集',
      href: hrefEdit,
    },
    {
      text: '削除',
      href: hrefDelete,
    },
  ]

  return (
    <li
      className={clsx(
        'relative flex justify-between gap-2 px-8 rounded-md text-white w-full my-0.5',
        isCurrentPath ? 'bg-primary-dark' : 'hover:bg-primary-dark',
      )}
      onMouseOver={showDots}
      onMouseLeave={hideDots}
    >
      {/* TODO: truncateが適用されているテキストはhoverした時にTooltipでタイトルが見れるようになるようにする */}
      <Link
        textNode={name}
        href={hrefDetail}
        className="truncate hover:bg-primary-dark"
      />

      <div className="absolute top-0 right-2">
        {isShowDots && (
          <ActionDots
            id={id}
            tooltipNode={(onClose) => (
              <Actions actions={actions} onClose={onClose} />
            )}
          />
        )}
      </div>
    </li>
  )
}
