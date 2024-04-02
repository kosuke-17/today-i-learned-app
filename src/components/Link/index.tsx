import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  textNode: string | ReactNode
  href: string
  id?: string
  className?: string
  onClick?: () => void
}

export default function CustomLink({
  textNode,
  id,
  href,
  onClick,
  className,
}: Props) {
  return (
    <Link
      className={className}
      id={id}
      href={href}
      scroll={false}
      onClick={onClick}
    >
      {textNode}
    </Link>
  )
}
