import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Main({ children }: Props) {
  return (
    <main className="h-screen w-screen flex bg-secondary-dark gap-2 p-2">
      {children}
    </main>
  )
}
