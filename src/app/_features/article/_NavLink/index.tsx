'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  name: string
  href: string
}

export default function _NavLink({ name, href }: Props) {
  const pathName = usePathname()
  const isCurrentPath = pathName === href

  return (
    <li
      className={clsx(
        'rounded-md text-white w-full my-0.5',
        isCurrentPath ? 'bg-emerald-700' : 'hover:bg-emerald-700',
      )}
    >
      <Link href={href}>{name}</Link>
    </li>
  )
}
