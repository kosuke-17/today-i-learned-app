'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useFormStatus } from 'react-dom'
import toast, { type Toast, Toaster } from 'react-hot-toast'

import Button from '@/components/Button'

type Props = {
  ht?: Pick<Toast, 'message'>
}

export default function SubmitButton({ ht }: Props) {
  const status = useFormStatus()
  // TODO: 内製したい
  const notify = ht ? () => toast(ht.message) : undefined

  return (
    <>
      <Button disabled={status.pending} onClick={notify}>
        <PaperAirplaneIcon className="h-8 w-8 text-white" />
      </Button>
      <Toaster />
    </>
  )
}
