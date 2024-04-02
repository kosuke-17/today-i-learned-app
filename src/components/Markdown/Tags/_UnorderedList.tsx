import { BaseTagProps } from '.'

type Props = BaseTagProps<HTMLUListElement>

export default function UnorderedList({ children }: Props) {
  return <ul className="list-disc pl-5">{children}</ul>
}
