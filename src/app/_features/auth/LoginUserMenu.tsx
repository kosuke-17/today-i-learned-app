'use client'

import Divider from '@/app/_features/layout/Divider'
import CustomIcon from '@/components/Icon'
import Tooltip from '@/components/Tooltip'

import LogoutBtn from './LogoutBtn'

export default function LoginUserMenu() {
  return (
    <div>
      <div id="login-user-menu" className="flex items-center cursor-pointer">
        <CustomIcon icon={{ type: 'login-user' }} />
      </div>

      <Tooltip place="right" clickable anchorSelect="#login-user-menu">
        田村
        <Divider className="mb-1" />
        <LogoutBtn />
      </Tooltip>
    </div>
  )
}
