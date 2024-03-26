import NavLink from '@/app/_features/common/NavLink'

export type NavIconType = 'home' | 'articles'

export type Nav = {
  name: string
  href: string
  iconType: NavIconType
}

const navs: Nav[] = [
  {
    name: 'ホーム',
    href: '/home',
    iconType: 'home',
  },
  {
    name: '記事',
    href: '/articles',
    iconType: 'articles',
  },
]

export default function MainSideNav() {
  return (
    <aside
      id="main-sidenav"
      className=" min-w-14 pt-4 bg-emerald-500 my-2 mx-1 rounded-md"
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
