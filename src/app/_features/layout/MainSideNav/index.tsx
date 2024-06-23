import LoginUserMenu from '@/app/_features/auth/LoginUserMenu'
import Divider from '@/app/_features/layout/Divider'
import NavLink from '@/app/_features/layout/NavLink'
import { ICON, type IconType } from '@/constant/icon'
import { PATH } from '@/constant/path'
import { fetchLoginUser } from '@/lib/auth'

export type Nav = {
  name: string
  href: string
  iconType: IconType
}

const navs: Nav[] = [
  {
    name: 'ホーム',
    href: PATH.HOME,
    iconType: ICON.HOME,
  },
  {
    name: 'ブロック',
    href: PATH.BLOCKS,
    iconType: ICON.BLOCK,
  },
  {
    name: '記事',
    href: PATH.ARTICLES,
    iconType: ICON.ARTICLES,
  },
  {
    name: 'ユーザー',
    href: PATH.USERS,
    iconType: ICON.USERS,
  },
  {
    name: '個人設定',
    href: PATH.PERSONAL_SETTINGS,
    iconType: ICON.PERSONAL_SETTINGS,
  },
]

export default async function MainSideNav() {
  const loginUser = await fetchLoginUser()

  return (
    <aside
      id="main-sidenav"
      className="min-w-14 py-4 bg-primary-main rounded-md px-2 flex flex-col justify-between"
      aria-label="MainSideNav"
    >
      <div className="overflow-y-auto">
        <ul className="space-y-1">
          {navs.map((nav) => (
            <li key={nav.name}>
              <NavLink nav={nav} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Divider className="mb-2" />

        {loginUser && <LoginUserMenu loginUser={loginUser} />}
      </div>
    </aside>
  )
}
