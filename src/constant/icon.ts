export const ICON = {
  HOME: 'home',
  BLOCK: 'blocks',
  ARTICLES: 'articles',
  USERS: 'users',
  PERSONAL_SETTINGS: 'personal-settings',
  LOGIN_USER: 'login-user',
  LOGOUT: 'logout',
} as const

export type IconType = (typeof ICON)[keyof typeof ICON]
