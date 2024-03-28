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

type GetDynamicPath = {
  /** pathのキー */
  key: PathKey
  /** idなどのユニークな値 */
  id: string | number
}

type GetViewPath = GetDynamicPath

export const getDynamicPath = ({ key, id }: GetDynamicPath) => {
  return `${PATH[key]}/${id}`
}

export const getViewPath = ({ key, id }: GetViewPath) => {
  return `${PATH[key]}/${id}/view`
}
