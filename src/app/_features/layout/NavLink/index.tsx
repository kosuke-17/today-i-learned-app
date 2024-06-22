'use client'

import { usePathname } from 'next/navigation'

import type { Nav } from '@/app/_features/layout/MainSideNav'
import CustomIcon from '@/components/Icon'
import Link from '@/components/Link'
import Tooltip from '@/components/Tooltip'

type Props = {
  nav: Nav
}

export default function NavLink({ nav }: Props) {
  const pathName = usePathname()
  const isCurrentPath = pathName.includes(nav.href)
  const iconType = nav.iconType

  const textNode = iconType ? (
    <CustomIcon
      iconType={iconType}
      className={isCurrentPath ? 'bg-primary-dark' : 'hover:bg-primary-dark'}
    />
  ) : (
    nav.name
  )

  return (
    <div data-tooltip-id={nav.name} data-tooltip-content={nav.name}>
      <Link
        id={nav.name}
        textNode={textNode}
        href={nav.href}
        className="flex items-center"
      />

      <Tooltip id={nav.name} place="right" />
    </div>
  )
}
