'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { FormState, createArticle } from '@/lib/articles/actions'

const initFormState: FormState = { errors: {}, message: null }

export default function CreateForm() {
  const [state, dispatch] = useFormState(createArticle, initFormState)

  // TODO : UIを良くする
  // TODO : Errorハンドリング
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-white p-4 md:p-6">
        <div>
          <input name="title" placeholder="タイトル" defaultValue="" />
        </div>

        <div>
          <textarea name="content" placeholder="内容" defaultValue="" />
        </div>

        <div className="flex items-center mb-4">
          <input
            name="published"
            id="published"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="published"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            公開
          </label>
        </div>

        <input
          type="hidden"
          name="authorId"
          value="clu829fxe0000fhevegqnmqzn"
        />

        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title &&
            state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
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
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const status = useFormStatus()
  return <button disabled={status.pending}>送信</button>
}
