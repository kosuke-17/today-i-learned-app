'use client'

import Divider from '@/app/_features/layout/Divider'
import CustomIcon from '@/components/Icon'
import Tooltip from '@/components/Tooltip'
import { ICON } from '@/constant/icon'
import { UserSelectForFindUser } from '@/lib/users'

import LogoutBtn from './LogoutBtn'

type Props = {
  loginUser: UserSelectForFindUser
}

export default function LoginUserMenu({ loginUser }: Props) {
  return (
    <div>
      <div id="login-user-menu" className="flex items-center cursor-pointer">
        <CustomIcon icon={{ type: ICON.LOGIN_USER }} />
      </div>

      <Tooltip place="right" clickable anchorSelect="#login-user-menu">
        <span className="text-xl font-bold">{loginUser.name}</span>
        <Divider className="mb-1" />
        <LogoutBtn />
      </Tooltip>
    </div>
  )
}
