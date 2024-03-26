'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Tooltip } from 'react-tooltip'

import type { Nav } from '@/app/_features/common/MainSideNav'
import { getIcon } from '@/lib/icon'

type Props = {
  nav: Nav
}

export default function NavLink({ nav }: Props) {
  const pathName = usePathname()
  const isCurrentPath = pathName === nav.href

  const linkClassName = useMemo(() => {
    const linkColor = isCurrentPath ? 'bg-emerald-600' : 'hover:bg-emerald-600'
    return `flex items-center mx-1 p-1 rounded-lg text-white group ${linkColor}`
  }, [isCurrentPath])

  const Icon = getIcon(nav.iconType)

  return (
    <>
      <div data-tooltip-id={nav.name} data-tooltip-content={nav.name}>
        <Link id={nav.name} href={nav.href} className={linkClassName}>
          <span className="flex-1 text-center">
            {Icon ? <Icon /> : nav.name}
          </span>
        </Link>

        <Tooltip className="z-10" id={nav.name} place="right" />
      </div>
    </>
  )
}
