import { ReactNode, forwardRef } from 'react'
import {
  ITooltip,
  Tooltip as ReactToolTip,
  TooltipRefProps,
} from 'react-tooltip'

import { COLOR, Z_INDEX } from '@/constant/style'

const style = {
  zIndex: Z_INDEX.TOOLTIP,
  backgroundColor: COLOR.PRIMAY_DEEP_DARK,
  color: COLOR.WHITE,
}

type Props = ITooltip & {
  children?: ReactNode
}

const Tooltip = forwardRef<TooltipRefProps, Props>(function T(
  { children, ...props },
  ref,
) {
  return (
    <ReactToolTip style={style} place="right" ref={ref} {...props}>
      {children}
    </ReactToolTip>
  )
})

export default Tooltip
