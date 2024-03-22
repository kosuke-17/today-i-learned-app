export default async function Page() {
  const createArticle = () => {}
  // formとerrorメッセージの表示は共通化してActionFormコンポーネント作る
  return <form action={createArticle}>{/* errorメッセージ表示 */}</form>
}
