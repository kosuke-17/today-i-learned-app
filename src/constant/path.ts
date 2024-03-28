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

type PathKey = keyof typeof PATH

type GenerateViewPath = {
  /** pathのキー */
  key: PathKey
  /** idなどのユニークな値 */
  id: string | number
}

export const generateViewPath = ({ key, id }: GenerateViewPath) => {
  return `${PATH[key]}/${id}/view`
}
