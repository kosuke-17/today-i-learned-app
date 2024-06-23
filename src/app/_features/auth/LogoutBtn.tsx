import CustomIcon from '@/components/Icon'

export default function LogoutBtn() {
  return (
    <button className="flex items-center hover:bg-primary-dark py-0.5 px-2 rounded-xl">
      <CustomIcon icon={{ type: 'logout', className: 'w-4 h-4' }} />
      ログアウト
    </button>
  )
}
