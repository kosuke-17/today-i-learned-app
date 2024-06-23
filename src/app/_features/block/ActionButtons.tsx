'use client'

import { useFormState } from 'react-dom'

import { FormState, createBlock } from '@/lib/blocks'

const initFormState: FormState = { errors: {}, message: '', status: null }

export const BlockAddButton = () => {
  const [_, dispatch] = useFormState(createBlock, initFormState)
  return (
    <form action={dispatch}>
      <button>作成</button>
    </form>
  )
}
