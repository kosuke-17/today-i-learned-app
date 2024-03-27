import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Main({ children }: Props) {
  return <main className="h-screen w-screen flex bg-gray-400">{children}</main>
}
