import { redirect } from 'next/navigation'

import { getDynamicPath } from '@/constant/path'

type Props = {
  params: { id: string }
}

/**
 * モーダル画面ようのページ
 *
 * /articles/[id]/viewの画面でリロードしたら、ここにくる
 */
export default async function Page({ params }: Props) {
  const path = getDynamicPath({ key: 'ARTICLES', id: params.id })
  redirect(path)
}
