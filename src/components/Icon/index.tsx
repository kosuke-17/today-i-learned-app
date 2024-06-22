import clsx from 'clsx'

import { type IconType } from '@/constant/icon'
import { getIcon } from '@/lib/icon'

type Props = {
  iconType: IconType
  className?: string
}

export default function CustomIcon({ iconType, className }: Props) {
  const Icon = getIcon(iconType)
  return (
    <span
      className={clsx(
        className,
        'rounded-lg p-2 flex-1 text-center text-white',
      )}
    >
      {Icon ? <Icon /> : null}
    </span>
  )
}
