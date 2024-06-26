/**
 * App Routerはファイルシステムベースルーティング、revalidatePathにpathを使用する。
 * そのため、定数化しておくことで変更を行いやすくしておく
 */
export const PATH = {
  HOME: '/home',
  BLOCKS: '/blocks',
  ARTICLES: '/articles',
  ARTICLES_CREATE: '/articles/create',
  ARTICLES_BULK_DELETE: '/articles/bulk-delete',
  USERS: '/users',
  PERSONAL_SETTINGS: '/personal-settings',
} as const

export const SUFFIX = {
  EDIT: 'edit',
  DELETE: 'delete',
  VIEW: 'view',
} as const

type PathKey = keyof typeof PATH
type SuffixType = 'detail' | (typeof SUFFIX)[keyof typeof SUFFIX]

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
