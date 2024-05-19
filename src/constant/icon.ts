export const ICON = {
  HOME: 'home',
  BLOCK: 'blocks',
  ARTICLES: 'articles',
  USERS: 'users',
  PERSONAL_SETTINGS: 'personal-settings',
} as const

export type IconType = (typeof ICON)[keyof typeof ICON]
