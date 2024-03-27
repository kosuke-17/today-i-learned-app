import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-emerald-600 hover:bg-emerald-700 rounded-md px-4 py-2 text-white',
        props.className,
      )}
    />
  )
}
