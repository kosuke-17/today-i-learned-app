import Link from '@/components/Link'

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
          textNode={item.name}
          key={item.name}
          href={item.href}
          className="mt-4 rounded-md px-4 py-2 text-sm text-white bg-primary-main hover:bg-primary-dark"
        />
      ))}
    </div>
  )
}
