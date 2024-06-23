import clsx from 'clsx'

import { type IconType } from '@/constant/icon'
import { getIcon } from '@/lib/icon'

type Icon = {
  className?: string
  type: IconType
}

type Props = {
  className?: string
  icon: Icon
}

export default function CustomIcon({ className, icon }: Props) {
  const Icon = getIcon(icon.type)
  return (
    <span
      className={clsx(
        className,
        'rounded-lg p-2 flex-1 text-center text-white',
      )}
    >
      {Icon ? <Icon className={icon?.className} /> : null}
    </span>
  )
}
