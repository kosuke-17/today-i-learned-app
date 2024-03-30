import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'
import { ReactNode, useRef } from 'react'
import { Tooltip as ReactToolTip, TooltipRefProps } from 'react-tooltip'

import { DirectionType } from '@/constant/direction'

type Props = {
  id: string
  direction?: DirectionType
  tooltipNode: (onClose: () => void) => ReactNode
}

export default function ActionDots({
  id,
  tooltipNode,
  direction = 'vertical',
}: Props) {
  const tooltipRef = useRef<TooltipRefProps>(null)
  const DotsIcon =
    direction === 'vertical' ? EllipsisVerticalIcon : EllipsisHorizontalIcon

  const onCloseTooltip = () => {
    tooltipRef.current?.close()
  }

  return (
    <>
      <div id={id}>
        <DotsIcon className="h-6 w-6 cursor-pointer rounded-full hover:bg-emerald-800" />
      </div>

      <ReactToolTip
        anchorSelect={`#${id}`}
        ref={tooltipRef}
        place="right"
        clickable
      >
        {tooltipNode(onCloseTooltip)}
      </ReactToolTip>
    </>
  )
}
