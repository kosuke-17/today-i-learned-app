'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useFormStatus } from 'react-dom'

import Button from '@/components/Button'

type Props = {
  text?: string
}

export default function SubmitButton({ text }: Props) {
  const status = useFormStatus()

  return (
    <>
      {text ? (
        <Button className="px-4 py-2" disabled={status.pending}>
          {text}
        </Button>
      ) : (
        <Button className="px-4" disabled={status.pending}>
          <PaperAirplaneIcon className="h-8 w-8" />
        </Button>
      )}
    </>
  )
}
