import clsx from 'clsx'

type Props = {
  className?: string
}

// TODO: MUIのDividerを参考に作成する
export default function Divider({ className }: Props) {
  return <div className={clsx(className, 'border-[0.5px] border-gray-100')} />
}
