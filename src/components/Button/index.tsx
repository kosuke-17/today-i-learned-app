import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-emerald-500 rounded-md px-4 py-2 text-white"
    >
      {children}
    </button>
  )
}
