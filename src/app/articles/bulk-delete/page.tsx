import { redirect } from 'next/navigation'

import { PATH } from '@/constant/path'

export default function Page() {
  redirect(PATH.ARTICLES)
}
