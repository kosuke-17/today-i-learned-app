'use client'

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
    return `flex items-center mx-1 p-1 rounded-full text-white group ${linkColor}`
  }, [isCurrentPath])

  return (
    <Link href={nav.href} className={linkClassName}>
      {/* TODO: ADD icon (SVG? */}
      <span className="flex-1 text-center">{nav.name}</span>
    </Link>
  )
}
