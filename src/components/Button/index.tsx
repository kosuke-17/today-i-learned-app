import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-primary-main hover:bg-primary-dark rounded-md px-4 text-primary-main',
        props.className,
      )}
    />
  )
}
