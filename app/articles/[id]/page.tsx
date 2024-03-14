import { notFound } from 'next/navigation'

const ArticlePage = () => {
  const article = {}

  if (article) {
    notFound()
  }

  return (
    <>
      <div>article</div>
    </>
  )
}

export default ArticlePage
