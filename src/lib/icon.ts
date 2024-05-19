import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
} from '@heroicons/react/24/outline'

import { ICON, IconType } from '@/constant/icon'

export const getIcon = (iconType: IconType) => {
  if (iconType === ICON.HOME) return HomeIcon
  if (iconType === ICON.BLOCK) return InboxIcon
  if (iconType === ICON.ARTICLES) return DocumentDuplicateIcon
  if (iconType === ICON.USERS) return UserCircleIcon
  if (iconType === ICON.PERSONAL_SETTINGS) return Cog6ToothIcon

  return null
}
