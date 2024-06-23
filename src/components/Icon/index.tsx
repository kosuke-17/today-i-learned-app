import clsx from 'clsx'

import { type IconType } from '@/constant/icon'
import { getIcon } from '@/lib/icon'

type Icon = {
  className?: string
}

type Props = {
  iconType: IconType
  className?: string
  icon?: Icon
}

export default function CustomIcon({ iconType, className, icon }: Props) {
  const Icon = getIcon(iconType)
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
