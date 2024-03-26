/**
 * App Routerはファイルシステムベースルーティング、revalidatePathにpathを使用する。
 * そのため、定数化しておくことで変更を行いやすくしておく
 */
export const PATH = {
  HOME: '/home',
  ARTICLES: '/articles',
  ARTICLES_CREATE: '/articles/create',
  USERS: '/users',
  PERSONAL_SETTINGS: '/personal-settings',
} as const
