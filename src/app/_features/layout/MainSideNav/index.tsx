import NavLink from '@/app/_features/layout/NavLink'
import { ICON } from '@/constant/icon'
import { PATH } from '@/constant/path'
import { NavIconType } from '@/lib/icon'

export type Nav = {
  name: string
  href: string
  iconType: NavIconType
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

export default function MainSideNav() {
  return (
    <aside
      id="main-sidenav"
      className="min-w-14 pt-4 bg-primary-main rounded-md"
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
    </aside>
  )
}
