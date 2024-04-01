'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Nav } from '@/app/_features/layout/MainSideNav'
import Tooltip from '@/components/Tooltip'
import { getIcon } from '@/lib/icon'

type Props = {
  nav: Nav
}

export default function NavLink({ nav }: Props) {
  const pathName = usePathname()
  const isCurrentPath = pathName.includes(nav.href)

  const Icon = getIcon(nav.iconType)

  return (
    <div data-tooltip-id={nav.name} data-tooltip-content={nav.name}>
      <Link
        id={nav.name}
        href={nav.href}
        className={clsx(
          'flex items-center mx-2 p-1 rounded-lg text-white group',
          isCurrentPath ? 'bg-primary-dark' : 'hover:bg-primary-dark',
        )}
      >
        <span className="flex-1 text-center">{Icon ? <Icon /> : nav.name}</span>
      </Link>

      <Tooltip id={nav.name} place="right" />
    </div>
  )
}
