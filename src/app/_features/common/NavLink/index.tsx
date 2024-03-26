'use client'

import { HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import type { Nav } from '@/app/_features/common/MainSideNav'

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

  const Icon =
    nav.iconType === 'home'
      ? HomeIcon
      : nav.iconType === 'articles'
        ? DocumentDuplicateIcon
        : null

  return (
    <Link href={nav.href} className={linkClassName}>
      <span className="flex-1 text-center">{Icon ? <Icon /> : nav.name}</span>
    </Link>
  )
}
