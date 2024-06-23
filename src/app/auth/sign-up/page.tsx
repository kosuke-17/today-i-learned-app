import SignUp from '@/app/_features/auth/SignUp'
import Main from '@/app/_features/layout/Main'
import CustomLink from '@/components/Link'

export default function Page() {
  return (
    <Main>
      <div className="w-full flex justify-center items-center">
        <div>
          <SignUp />

          <div className="mt-4 w-full text-center">
            <CustomLink
              href="/auth/sign-in"
              textNode={
                <span className="text-white font-bold underline">
                  ログインへ
                </span>
              }
            />
          </div>
        </div>
      </div>
    </Main>
  )
}
