import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-primary hover:bg-primary-dark rounded-md px-4 py-2 text-primary',
        props.className,
      )}
    />
  )
}
