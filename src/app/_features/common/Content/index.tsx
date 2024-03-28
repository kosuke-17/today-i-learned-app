import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Content({ children }: Props) {
  return (
    <div className="flex-8 rounded-md p-4 bg-secondary-light">{children}</div>
  )
}
