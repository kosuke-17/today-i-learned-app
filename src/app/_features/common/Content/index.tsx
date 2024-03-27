import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Content({ children }: Props) {
  return (
    <div className="flex-8 my-2 mx-1 rounded-md p-1 bg-gray-200">
      {children}
    </div>
  )
}
