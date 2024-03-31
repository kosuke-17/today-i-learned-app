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

export const SUFFIX = {
  EDIT: 'edit',
  VIEW: 'view',
}

type PathKey = keyof typeof PATH
type SuffixType = 'detail' | 'edit' | 'view'

type GetDynamicPath = {
  /** pathのキー */
  key: PathKey
  /** idなどのユニークな値 */
  id: string | number
  /** 接尾辞 */
  suffix?: SuffixType
}

export const getDynamicPath = ({
  key,
  id,
  suffix = 'detail',
}: GetDynamicPath) => {
  const prefix = PATH[key]
  return suffix === 'detail' ? `${prefix}/${id}` : `${prefix}/${id}/${suffix}`
}
