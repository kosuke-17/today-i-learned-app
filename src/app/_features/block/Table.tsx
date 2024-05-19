import { BlockSelect } from '@/lib/blocks/definitions'
import { fetchBlocks } from '@/lib/blocks/fetchs'

import { BlockAddButton } from './BlockActionButtons'

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

const TableHead = () => {
  return (
    <thead className="text-white bg-secondary-main">
      <tr>
        <th scope="col" className="px-6 py-3">
          name
        </th>
      </tr>
    </thead>
  )
}

const TableRow = ({ block }: { block: BlockSelect }) => {
  return (
    <tr className="border-b bg-secondary-light">
      <td scope="row" className="px-6 py-4 font-light bg-white">
        {block.name}
      </td>
    </tr>
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
