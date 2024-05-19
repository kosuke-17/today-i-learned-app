export default async function Page() {
  const blocks = [
    { id: '1', name: 'Apple MacBook Pro' },
    { id: '2', name: 'Microsoft Surface Pro' },
    { id: '3', name: 'a' },
  ]
  return (
    <>
      <div className="relative h-full flex justify-center items-center">
        <table className="w-1/3 text-left border">
          <TableHead />
          <tbody>
            {/* TODO: 作成のアイコンとdndを実装 */}
            {blocks.map((block) => (
              <TableRow key={block.id} block={block} />
            ))}
            {/* 作成の行を追加 */}
          </tbody>
        </table>
      </div>
    </>
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

const TableRow = ({ block }: { block: { id: string; name: string } }) => {
  return (
    <tr className="border-b bg-secondary-light">
      <td scope="row" className="px-6 py-4 font-light bg-white">
        {block.name}
      </td>
    </tr>
  )
}
