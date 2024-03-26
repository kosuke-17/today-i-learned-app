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
      className="fixed top-0 left-0 w-20 h-screen"
      aria-label="MainSideNav"
    >
      <div className="h-full py-4 overflow-y-auto bg-emerald-500">
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
