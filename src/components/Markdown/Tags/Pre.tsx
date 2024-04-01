import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import darcula from 'react-syntax-highlighter/dist/esm/styles/hljs/darcula'

import { BaseTagProps } from '.'

type Props = BaseTagProps<HTMLPreElement>

export default function Pre({ children, ...props }: Props) {
  if (!children || typeof children !== 'object') {
    return <code {...props}>{children}</code>
  }
  const childType = 'type' in children ? children.type : ''
  if (childType !== 'code') {
    return <code {...props}>{children}</code>
  }

  const childProps = 'props' in children ? children.props : {}
  const { className, children: code } = childProps
  const classList = className ? className.split(':') : []
  const language = classList[0]?.replace('language-', '')
  const fileName = classList[1]

  return (
    <div className="my-1">
      {fileName && (
        <div className="p-2 bg-black">
          <span className="text-white">{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter language={language} style={darcula}>
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}
