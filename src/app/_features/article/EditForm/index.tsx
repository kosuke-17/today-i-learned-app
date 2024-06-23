'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

import MainForm from '@/app/_features/article/MainForm'
import SubForm from '@/app/_features/article/SubForm'
import { getDynamicPath } from '@/constant/path'
import { FormState, updateArticle } from '@/lib/articles/actions'
import { ArticleSelect } from '@/lib/articles/definitions'
import { STATUS_CODE } from '@/lib/status-code'
import { UserSelectForFindUser } from '@/lib/users/definitions'

const initFormState: FormState = { errors: {}, message: '', status: null }
type Props = {
  loginUser?: UserSelectForFindUser
  article: ArticleSelect
}
export default function EditForm({ loginUser, article }: Props) {
  const bindedUpdateArticle = updateArticle.bind(null, article.id)
  const [state, dispatch] = useFormState(bindedUpdateArticle, initFormState)
  const router = useRouter()

  useEffect(() => {
    if (state.status === STATUS_CODE.SUCCESS) {
      toast(state.message)
      router.push(getDynamicPath({ key: 'ARTICLES', id: article.id }))
    }
  }, [article.id, router, state])

  return (
    <form action={dispatch} className="flex h-full gap-2 mx-40">
      <div className="flex-5">
        <MainForm
          state={state}
          defaultValues={{ title: article?.title, content: article?.content }}
        />
      </div>
      <div className="flex-1 bg-white rounded-md pt-4">
        <SubForm defaultValue={article?.published} />
      </div>

      <input type="hidden" name="authorId" value={loginUser?.id} />
    </form>
  )
}
