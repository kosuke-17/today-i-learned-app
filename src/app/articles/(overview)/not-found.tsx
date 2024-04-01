import NotFoundContent from '@/app/_features/layout/NotFoundContent'
import { PATH } from '@/constant/path'

export default function NotFound() {
  return (
    <NotFoundContent
      title="記事の一覧データが見つかりませんでした."
      linkItems={[
        {
          name: '戻る',
          href: PATH.ARTICLES,
        },
        {
          name: '記事を作成',
          href: PATH.ARTICLES_CREATE,
        },
      ]}
    />
  )
}
