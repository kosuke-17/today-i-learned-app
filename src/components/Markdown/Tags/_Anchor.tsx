import { AnchorHTMLAttributes, ClassAttributes } from 'react'
import { ExtraProps } from 'react-markdown'

type Props = ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ExtraProps

export default function Anchor({ children, href }: Props) {
  return (
    <a
      href={href}
      className="text-primary-main underline hover:text-primary-deep-dark"
    >
      {children}
    </a>
  )
}
