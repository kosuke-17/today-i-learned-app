import NavLink from '@/app/_features/common/NavLink'

export type Nav = {
  name: string
  href: string
}

const navs: Nav[] = [
  {
    name: 'ホーム',
    href: '/home',
  },
  {
    name: '記事',
    href: '/articles',
  },
]

export default function MainSideNav() {
  return (
    <aside
      id="main-sidenav"
      className="fixed top-0 left-0 w-20 h-screen pt-4 bg-emerald-500"
      aria-label="MainSideNav"
    >
      <div className="h-full overflow-y-auto">
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
