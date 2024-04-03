'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

import Link from '@/components/Link'
import Overlay from '@/components/Overlay'
import SubmitButton from '@/components/SubmitButton'
import { PATH } from '@/constant/path'
import { BulkDeleteState, bulkDeleteArticle } from '@/lib/articles/actions'
import { ArticleSelectForNav } from '@/lib/articles/definitions'
import { STATUS_CODE } from '@/lib/status-code'

const initFormState: BulkDeleteState = {
  errors: undefined,
  message: '',
  status: null,
}

type Props = {
  articles: ArticleSelectForNav[]
}

export default function BulkDeleteForm({ articles }: Props) {
  const [state, dispatch] = useFormState(bulkDeleteArticle, initFormState)
  const router = useRouter()

  useEffect(() => {
    if (state.status === STATUS_CODE.SUCCESS) {
      toast.success(state.message)
      router.push(PATH.ARTICLES)
    }
    if (state.status === STATUS_CODE.UNPROCESSABLE_ENTITY) {
      state.errors?.ids?.map((msg) => {
        toast.error(msg)
      })
    }
  }, [router, state])

  /**
   * Parallel RouteとIntercepting Routeによるモーダルのバグを修正
   */
  const pathname = usePathname()
  if (!pathname.includes('bulk-delete')) return null

  return (
    <form
      action={dispatch}
      className="fixed flex justify-center items-center left-0 top-0 h-full w-full"
    >
      <Overlay />

      <div className="bg-white rounded-xl z-10 min-w-[500px] h-2/3 py-2 px-4">
        <div className="max-h-[10%] pb-1 text-lg font-semibold">
          削除する記事を選択
        </div>
        <div className="overflow-scroll h-[80%] p-2 border-y-1 border-gray-300">
          {articles.map((a) => (
            <div
              className="flex gap-2 px-2 items-center hover:bg-gray-300 rounded-lg"
              key={a.id}
            >
              <input
                id={a.id}
                name="ids"
                value={a.id}
                type="checkbox"
                className="accent-primary-dark w-4 h-4"
              />
              <label htmlFor={a.id} className="w-full">
                {a.title}
              </label>
            </div>
          ))}
        </div>
        <div className="max-h-[10%] gap-2 flex justify-end mt-2">
          <Link
            textNode="キャンセル"
            href={PATH.ARTICLES}
            className="text-sm px-4 py-2 min-w-16 rounded-md font-bold bg-white text-primary-main hover:text-white hover:bg-primary-main border-primary-main border-1"
          />
          <SubmitButton text="一括削除" />
        </div>
      </div>
    </form>
  )
}
