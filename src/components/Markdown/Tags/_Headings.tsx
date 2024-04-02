// Heading → h1,h2, ...
import { BaseTagProps } from '.'

type Props = BaseTagProps<HTMLHeadingElement>

const baseStyle = 'my-5 border-b border-gray-300'

function H1({ children }: Props) {
  return <h1 className={`text-4xl ${baseStyle}`}>{children}</h1>
}
function H2({ children }: Props) {
  return <h2 className={`text-3xl ${baseStyle}`}>{children}</h2>
}
function H3({ children }: Props) {
  return <h3 className={`text-2xl ${baseStyle}`}>{children}</h3>
}

const headings = {
  h1: H1,
  h2: H2,
  h3: H3,
}

export default headings
