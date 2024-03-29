import { clsx } from 'clsx'

import ErrorField from '@/app/_features/common/Error/Field'
import SubmitButton from '@/app/_features/common/SubmitButton/index'
import { FormState } from '@/lib/articles/actions'

export default function MainForm({ state }: { state: FormState }) {
  return (
    <>
      <div className="gap-2 flex h-[5%]">
        <input
          name="title"
          className={clsx(
            'w-full bg-white outline-none rounded-md text-lg font-bold pl-2 placeholder:text-lg placeholder:font-bold',
            { 'ring-2 ring-error': !!state.errors?.title },
          )}
          placeholder="タイトル"
          defaultValue=""
        />

        <SubmitButton />
      </div>

      {state.errors?.title && <ErrorField error={state.errors.title} />}

      <div className="mt-2 h-[86%]">
        <textarea
          name="content"
          className={clsx(
            'bg-white h-full w-full overflow-scroll outline-none px-2 py-4 rounded-md placeholder:text-lg placeholder:font-bold',
            { 'ring-2 ring-error': !!state.errors?.content },
          )}
          placeholder="内容"
          defaultValue=""
        />
      </div>

      {state.errors?.content && <ErrorField error={state.errors.content} />}
    </>
  )
}
