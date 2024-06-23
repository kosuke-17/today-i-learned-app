import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  ArrowRightStartOnRectangleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { ICON, IconType } from '@/constant/icon'

export const getIcon = (iconType: IconType) => {
  if (iconType === ICON.HOME) return HomeIcon
  if (iconType === ICON.BLOCK) return InboxIcon
  if (iconType === ICON.ARTICLES) return DocumentDuplicateIcon
  if (iconType === ICON.USERS) return UsersIcon
  if (iconType === ICON.PERSONAL_SETTINGS) return Cog6ToothIcon
  if (iconType === ICON.LOGIN_USER) return UserCircleIcon
  if (iconType === ICON.LOGOUT) return ArrowRightStartOnRectangleIcon

  return null
}
