type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  return <>編集請求書id:{params.id}</>
}
