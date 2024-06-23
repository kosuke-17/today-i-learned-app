import { fetchBlocks } from '@/lib/blocks'

import { BlockAddButton } from '../ActionButtons'
import TableHead from './Head'
import TableRow from './Row'

export default async function BlockTable() {
  const blocks = await fetchBlocks()

  return (
    <table className="w-1/3 text-left border">
      <TableHead />
      <tbody>
        {/* TODO: 作成のアイコンとdndを実装 */}
        {blocks.map((block) => (
          <TableRow key={block.id} block={block} />
        ))}
        <BlockAddRow />
      </tbody>
    </table>
  )
}

const BlockAddRow = () => {
  return (
    <tr>
      <td className="px-6 py-1 font-light bg-white opacity-60 hover:opacity-100">
        <BlockAddButton />
      </td>
    </tr>
  )
}
