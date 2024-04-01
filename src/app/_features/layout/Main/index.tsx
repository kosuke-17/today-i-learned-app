import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Main({ children }: Props) {
  // min-h-screenにすることで、最小が画面サイズでそれより大きい場合は大きいだけ下に追加されていく
  return (
    <main className="min-h-screen w-screen flex bg-secondary-dark gap-2 p-2">
      {children}
    </main>
  )
}
