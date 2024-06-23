'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

import SubmitButton from '@/components/SubmitButton'
import { PATH } from '@/constant/path'
import { STATUS_CODE } from '@/lib/status-code'
import { FormState, createUser } from '@/lib/users'

const initFormState: FormState = {
  errors: {},
  message: '',
  status: null,
}

export default function SignUp() {
  const [state, dispatch] = useFormState(createUser, initFormState)
  const router = useRouter()

  useEffect(() => {
    if (state.status === STATUS_CODE.SUCCESS) {
      toast(state.message)
      router.push(PATH.HOME)
    }
  }, [router, state])

  return (
    <form
      action={dispatch}
      className="w-96 rounded-md p-4 bg-secondary-light grid gap-4"
    >
      <span className="text-xl font-bold">ユーザー作成</span>
      {/* TODO: リファクタ */}
      <input
        name="name"
        className={clsx(
          'w-full bg-white outline-none rounded-md text-lg font-bold pl-2 placeholder:text-lg placeholder:font-bold',
        )}
        placeholder="名前"
        defaultValue=""
      />
      <input
        name="email"
        className={clsx(
          'w-full bg-white outline-none rounded-md text-lg font-bold pl-2 placeholder:text-lg placeholder:font-bold',
        )}
        placeholder="メールアドレス"
        defaultValue=""
      />
      <input
        name="password"
        className={clsx(
          'w-full bg-white outline-none rounded-md text-lg font-bold pl-2 placeholder:text-lg placeholder:font-bold',
        )}
        placeholder="パスワード"
        defaultValue=""
      />
      <SubmitButton text="送信" />
    </form>
  )
}
