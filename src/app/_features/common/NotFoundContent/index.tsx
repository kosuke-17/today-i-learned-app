import Link from 'next/link'

type Props = {
  title: string
  linkItems: { name: string; href: string }[]
}

export default function NotFoundContent({ title, linkItems }: Props) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>{title}</p>
      {linkItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="mt-4 rounded-md bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-700"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
