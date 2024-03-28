'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useFormStatus } from 'react-dom'

import Button from '@/components/Button'


export default function SubmitButton() {
  const status = useFormStatus()

  return (
      <Button disabled={status.pending}>
        <PaperAirplaneIcon className="h-8 w-8 text-white" />
      </Button>
  )
}
