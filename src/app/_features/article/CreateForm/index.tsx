'use client'

import { clsx } from 'clsx'
import { useFormState } from 'react-dom'

import SubmitButton from '@/app/_features/common/SubmitButton/index'
import { FormState, createArticle } from '@/lib/articles/actions'

const initFormState: FormState = { errors: {}, message: null, status: null }

export default function CreateForm() {
  const [state, dispatch] = useFormState(createArticle, initFormState)

  // TODO : UIを良くする
  // TODO : Errorハンドリング
  return (
    <form action={dispatch} className="flex h-full gap-2 mx-40">
      <MainForm state={state} />
      <SubForm />

      {/* TODO: 修正 */}
      <input type="hidden" name="authorId" value="clu829fxe0000fhevegqnmqzn" />
    </form>
  )
}

function MainForm({ state }: { state: FormState }) {
  return (
    <div className="flex-5">
      <div className="gap-2 flex h-[5%]">
        <input
          name="title"
          className={clsx(
            'w-full bg-white outline-none rounded-md text-lg font-bold pl-2 placeholder:text-lg placeholder:font-bold',
            { 'ring-2 ring-red-500': !!state.errors?.title },
          )}
          placeholder="タイトル"
          defaultValue=""
        />

        <SubmitButton ht={{ message: '記事を作成しました' }} />
      </div>

      <div id="title-error" aria-live="polite" aria-atomic="true">
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div className="mt-2 h-[86%]">
        <textarea
          name="content"
          className={clsx(
            'bg-white h-full w-full overflow-scroll outline-none px-2 py-4 rounded-md placeholder:text-lg placeholder:font-bold',
            { 'ring-2 ring-red-500': !!state.errors?.content },
          )}
          placeholder="内容"
          defaultValue=""
        />
      </div>
      <div id="content-error" aria-live="polite" aria-atomic="true">
        {state.errors?.content &&
          state.errors.content.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
  )
}

function SubForm() {
  return (
    <div className="flex-1 bg-white rounded-md pt-4">
      <label className="flex items-center justify-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div
          className="relative w-11 h-6 bg-secondary-light rounded-full peer dark:bg-secondary-main
        peer-checked:after:translate-x-full after:border-gray-300
        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white 
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"
        />
        <span className="ms-3 text-lg font-bold">公開</span>
      </label>
    </div>
  )
}
