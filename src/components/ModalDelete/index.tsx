'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import SubmitButton from '@/components/SubmitButton'
import { PATH } from '@/constant/path'
import { FormState, deleteArticle } from '@/lib/articles/actions'
import { ArticleSelect } from '@/lib/articles/definitions'
import { STATUS_CODE } from '@/lib/status-code'

type Props = { article: ArticleSelect }
const initFormState: Omit<FormState, 'errors'> = { message: '', status: null }

export default function ModalDelete({ article }: Props) {
  const deleteActionWithId = deleteArticle.bind(null, article.id)
  const [state, dispatch] = useFormState(deleteActionWithId, initFormState)
  const router = useRouter()

  const onBack = () => {
    router.back()
  }

  useEffect(() => {
    if (state.status === STATUS_CODE.SUCCESS) {
      toast(state.message)
      router.push(PATH.ARTICLES)
    }
  }, [router, state])

  return (
    <form
      action={dispatch}
      className="fixed left-0 top-0 z-10 flex h-full w-full justify-center items-center"
    >
      <Overlay />

      <div className="bg-white relative rounded-xl z-10 w-[300px] h-40">
        <div className="text-2xl text-center font-bold mt-2 mb-4">
          {article.title}を削除しますか？
        </div>
        <div className="absolute bottom-4 right-2 gap-2 flex justify-end">
          <Button className="px-4 py-2" type="button" onClick={onBack}>
            キャンセル
          </Button>
          <SubmitButton text="削除" />
        </div>
      </div>
    </form>
  )
}
