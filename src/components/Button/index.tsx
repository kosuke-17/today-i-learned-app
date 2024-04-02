import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import { VARIANT, Variant } from '@/constant/style'

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: Variant
}

export default function Button({ variant = VARIANT.FILL, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'text-sm px-4 py-2 min-w-16 rounded-md font-bold',
        props.className,
        getVariantStyle(variant),
      )}
    />
  )
}

const getVariantStyle = (variant: Variant) => {
  if (variant === VARIANT.TEXT) return ''
  if (variant === VARIANT.ELEVATE)
    return 'bg-white hover:bg-gray-100 text-primary-main shadow'
  if (variant === VARIANT.FILL)
    return 'bg-primary-main hover:bg-primary-dark text-white'
  if (variant === VARIANT.OUTLINE)
    return `bg-white text-primary-main hover:text-white hover:bg-primary-main border-primary-main border-1`
}
