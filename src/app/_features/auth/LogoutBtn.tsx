import CustomIcon from '@/components/Icon'
import { ICON } from '@/constant/icon'

export default function LogoutBtn() {
  return (
    <button className="flex items-center hover:bg-primary-dark py-0.5 px-2 rounded-xl">
      <CustomIcon icon={{ type: ICON.LOGOUT, className: 'w-4 h-4' }} />
      ログアウト
    </button>
  )
}
