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
      className="min-w-20 pt-4 bg-emerald-500 my-2 mx-1 rounded-md"
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
