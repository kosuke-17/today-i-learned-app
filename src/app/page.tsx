import { redirect } from 'next/navigation'

import { PATH } from '@/constant/path'

export default async function Page() {
  redirect(PATH.HOME)
}
