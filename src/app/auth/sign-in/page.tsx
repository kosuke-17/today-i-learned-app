'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

import Main from '@/app/_features/layout/Main'
import CustomLink from '@/components/Link'
import SubmitButton from '@/components/SubmitButton'
import { PATH } from '@/constant/path'
import { FormState, loginUser } from '@/lib/auth/actions'
import { STATUS_CODE } from '@/lib/status-code'
import { useLoginUserStore } from '@/lib/stores/loginUser/store'

const initFormState: FormState = {
  errors: {},
  message: '',
  status: null,
  data: undefined,
}

export default function Page() {
  const [state, dispatch] = useFormState(loginUser, initFormState)
  const router = useRouter()
  const { setLoginUser } = useLoginUserStore()

  useEffect(() => {
    if (state.status === STATUS_CODE.OK) {
      toast(state.message)
      router.push(PATH.HOME)
    }
    const user = state.data?.user

    if (user) {
      setLoginUser(user)
    }
  }, [router, setLoginUser, state])

  return (
    <Main>
      <div className="w-full flex justify-center items-center">
        <div>
          <form
            action={dispatch}
            className="w-96 rounded-md p-4 bg-secondary-light grid gap-4"
          >
            <span className="text-xl font-bold">ログイン</span>

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
          <div className="mt-4 w-full text-center">
            <CustomLink
              href="/auth/sign-up"
              textNode={
                <span className="text-white font-bold underline">
                  新規登録へ
                </span>
              }
            />
          </div>
        </div>
      </div>
    </Main>
  )
}
