import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

export type NavIconType = 'home' | 'articles' | 'users' | 'personal-settings'

export const getIcon = (iconType: NavIconType) => {
  if (iconType === 'home') return HomeIcon
  if (iconType === 'articles') return DocumentDuplicateIcon
  if (iconType === 'users') return UserCircleIcon
  if (iconType === 'personal-settings') return Cog6ToothIcon

  return null
}
