import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'

type Props = ClassAttributes<HTMLUListElement> &
  HTMLAttributes<HTMLUListElement> &
  ExtraProps

export default function UnorderedList({ children }: Props) {
  return <ul className="list-disc pl-5">{children}</ul>
}
