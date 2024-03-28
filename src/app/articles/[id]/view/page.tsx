import { redirect } from 'next/navigation'

import { PATH } from '@/constant/path'

type Props = {
  params: { id: string }
}

/**
 * モーダル画面ようのページ
 *
 * /articles/[id]/viewの画面でリロードしたら、ここにくる
 */
export default async function Page({ params }: Props) {
  redirect(`${PATH.ARTICLES}/${params.id}`)
}
