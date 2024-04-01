import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Headings, Pre, Anchor, UnorderedList } from './Tags'

type Props = {
  content: string
}

/**
 * @see: https://github.com/remarkjs/react-markdown?tab=readme-ov-file
 */
export default function Markdown({ content }: Props) {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkGfm]}
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
