'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type Props = {
  name: string
  href: string
}

export default function _NavLink({ name, href }: Props) {
  const pathName = usePathname()
  const isCurrentPath = pathName === href

  const linkClassName = useMemo(() => {
    return `mx-8 rounded-md ${isCurrentPath ? 'bg-emerald-600' : 'hover:bg-emerald-600'}`
  }, [isCurrentPath])

  return (
    <li className={linkClassName}>
      <Link href={href} className="text-white">
        {name}
      </Link>
    </li>
  )
}
