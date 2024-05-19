'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'

import { BlockSelect } from '@/lib/blocks/definitions'

type Props = {
  block: BlockSelect
}

export default function TableRow({ block }: Props) {
  const [blockName, setBlockName] = useState('')
  const [timer, setTimer] = useState<NodeJS.Timeout>()

  const mutation = useMutation({
    mutationFn: (body: { name: string }) => {
      return axios.put(`/api/block/${block.id}`, body)
    },
  })

  const handleUpdateBlock = (e: ChangeEvent<HTMLInputElement>) => {
    setBlockName(e.target.value)

    // 先にセットしておいたmutation処理をキャンセル
    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      mutation.mutate({ name: blockName })
    }, 500)

    setTimer(newTimer)
  }

  return (
    <tr className="border-b bg-secondary-light">
      <td scope="row" className="px-3 py-2 font-light bg-white">
        <input
          id={block.id}
          type="text"
          onChange={handleUpdateBlock}
          className="focus:outline-none"
          required
          defaultValue={block.name ?? undefined}
        />
      </td>
    </tr>
  )
}
