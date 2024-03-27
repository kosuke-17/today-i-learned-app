'use client'

import { useFormStatus } from 'react-dom'
import toast, { type Toast, Toaster } from 'react-hot-toast'

type Props = {
  ht?: Pick<Toast, 'message'>
}

export default function SubmitButton({ ht }: Props) {
  const status = useFormStatus()
  // TODO: 内製したい
  const notify = ht ? () => toast(ht.message) : undefined

  return (
    <>
      <button disabled={status.pending} onClick={notify}>
        送信
      </button>
      <Toaster />
    </>
  )
}
