'use client'

import { BlockSelect } from '@/lib/blocks/definitions'

export default function TableRow({ block }: { block: BlockSelect }) {
  return (
    <tr className="border-b bg-secondary-light">
      <td scope="row" className="px-3 py-2 font-light bg-white">
        <input
          id={block.id}
          type="text"
          onChange={() => {}}
          className="focus:outline-none"
          required
          defaultValue={block.name ?? undefined}
        />
      </td>
    </tr>
  )
}
