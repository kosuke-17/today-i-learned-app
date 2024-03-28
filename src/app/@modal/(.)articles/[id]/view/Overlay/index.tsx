import { useRouter } from 'next/navigation'

export default function Overlay() {
  const router = useRouter()

  const onBack = () => {
    router.back()
  }
  return (
    <div
      className="fixed z-0 h-full w-full bg-black opacity-45"
      onClick={onBack}
    />
  )
}
