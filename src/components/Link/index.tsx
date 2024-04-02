import Link, { type LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    textNode: string | ReactNode
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
