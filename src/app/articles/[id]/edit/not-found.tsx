import NotFoundContent from '@/app/_features/layout/NotFoundContent'
import { PATH } from '@/constant/path'

export default function NotFound() {
  return (
    <NotFoundContent
      title="記事が見つかりませんでした."
      linkItems={[
        {
          name: '戻る',
          href: PATH.ARTICLES,
        },
      ]}
    />
  )
}
