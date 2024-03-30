'use client'

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
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
        'flex justify-between gap-2 px-4 rounded-md text-white w-full my-0.5',
        isCurrentPath ? 'bg-primary-dark' : 'hover:bg-primary-dark',
      )}
    >
      <Link href={href} className="truncate flex-1">
        {name}
      </Link>

      <EllipsisVerticalIcon className="h-6 w-6 cursor-pointer rounded-full hover:bg-emerald-800" />
    </li>
  )
}
