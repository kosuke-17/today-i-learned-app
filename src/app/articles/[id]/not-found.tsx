import NotFoundContent from '@/app/_features/common/NotFoundContent'
import { PATH } from '@/constant/path'

export default function NotFound() {
  return (
    <NotFoundContent
      title="お探しの記事は見つかりませんでした."
      linkItems={[
        {
          name: '戻る',
          href: PATH.ARTICLES,
        },
      ]}
    />
  )
}
