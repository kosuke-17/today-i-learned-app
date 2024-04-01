import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Headings, Pre, Anchor, UnorderedList } from './Tags'

type Props = {
  content: string
}

/**
 * @see: https://github.com/remarkjs/react-markdown?tab=readme-ov-file#react-markdown
 */
export default function Markdown({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]} // remarkGfmを適用させるには、contentの中身を適した形式にする必要があるため公式を確認する
      components={{
        a: Anchor,
        pre: Pre,
        ul: UnorderedList,
        ...Headings,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
