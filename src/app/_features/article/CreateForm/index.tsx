'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/constant/path'
import { FormState, createArticle } from '@/lib/articles/actions'
import { STATUS_CODE } from '@/lib/status-code'

import MainForm from './MainForm'
import SubForm from './SubForm'

const initFormState: FormState = { errors: {}, message: '', status: null }

export default function CreateForm() {
  const [state, dispatch] = useFormState(createArticle, initFormState)
  const router = useRouter()

  useEffect(() => {
    if (state.status === STATUS_CODE.CREATED) {
      toast(state.message)
      router.push(PATH.ARTICLES)
    }
  }, [router, state])

  return (
    <form action={dispatch} className="flex h-full gap-2 mx-40">
      <div className="flex-5">
        <MainForm state={state} />
      </div>
      <div className="flex-1 bg-white rounded-md pt-4">
        <SubForm />
      </div>

      {/* TODO: 修正 */}
      <input type="hidden" name="authorId" value="clu829fxe0000fhevegqnmqzn" />
    </form>
  )
}
