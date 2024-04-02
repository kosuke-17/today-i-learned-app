'use client'

import { useFormStatus } from 'react-dom'

import Button from '@/components/Button'

type Props = {
  text: string
}

export default function SubmitButton({ text }: Props) {
  const status = useFormStatus()

  return <Button disabled={status.pending}>{text}</Button>
}
