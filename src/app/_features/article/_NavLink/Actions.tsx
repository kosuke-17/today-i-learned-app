import Link from '@/components/Link'

type Props = {
  actions: { text: string; href: string }[]
  onClose: () => void
}

export default function Actions({ actions, onClose }: Props) {
  return (
    <div className="bg-white rounded-md p-2">
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
    </div>
  )
}
