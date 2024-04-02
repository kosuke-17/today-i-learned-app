import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'
import { ReactNode, useRef } from 'react'
import { TooltipRefProps } from 'react-tooltip'

import Tooltip from '@/components/Tooltip'
import { DIRECTION, DirectionType } from '@/constant/direction'

type Props = {
  id: string
  direction?: DirectionType
  tooltipNode: (onClose: () => void) => ReactNode
}

export default function ActionDots({
  id,
  tooltipNode,
  direction = DIRECTION.VERTICAL,
}: Props) {
  const tooltipRef = useRef<TooltipRefProps>(null)
  const DotsIcon =
    direction === DIRECTION.VERTICAL
      ? EllipsisVerticalIcon
      : EllipsisHorizontalIcon

  const onCloseTooltip = () => {
    tooltipRef.current?.close()
  }

  return (
    <>
      <div id={id}>
        <DotsIcon className="h-6 w-6 cursor-pointer rounded-full hover:bg-primary-deep-dark" />
      </div>

      <Tooltip anchorSelect={`#${id}`} ref={tooltipRef} clickable>
        {tooltipNode(onCloseTooltip)}
      </Tooltip>
    </>
  )
}
