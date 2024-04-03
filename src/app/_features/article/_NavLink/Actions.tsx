import Link from '@/components/Link'

type Action = { text: string; href: string }

type Props = {
  actions: Action[]
  onClose: () => void
}

export default function Actions({ actions, onClose }: Props) {
  return (
    <>
      {actions.map((a) => (
        <div key={a.href}>
          <Link
            textNode={a.text}
            href={a.href}
            onClick={onClose}
            className="bg-primary-main hover:bg-primary-dark rounded-lg px-2 py-0.5"
          />
        </div>
      ))}
    </>
  )
}
