'use client'

import { useFormState } from 'react-dom'

import SubmitButton from '@/app/_features/common/SubmitButton/index'
import { FormState, createArticle } from '@/lib/articles/actions'

const initFormState: FormState = { errors: {}, message: null, status: null }

export default function CreateForm() {
  const [state, dispatch] = useFormState(createArticle, initFormState)

  // TODO : UIを良くする
  // TODO : Errorハンドリング
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-white p-4 md:p-6">
        <div>
          <input name="title" placeholder="タイトル" defaultValue="" />

          <div id="title-error" aria-live="polite" aria-atomic="true">
            {state.errors?.title &&
              state.errors.title.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div>
          <textarea name="content" placeholder="内容" defaultValue="" />

          <div id="content-error" aria-live="polite" aria-atomic="true">
            {state.errors?.content &&
              state.errors.content.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label className="inline-flex items-center cursor-pointer">
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

        {/* TODO: 修正 */}
        <input
          type="hidden"
          name="authorId"
          value="clu829fxe0000fhevegqnmqzn"
        />
      </div>
      <SubmitButton ht={{ message: '記事を作成しました' }} />
    </form>
  )
}
