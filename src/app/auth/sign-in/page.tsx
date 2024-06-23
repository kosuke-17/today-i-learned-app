import SignIn from '@/app/_features/auth/SignIn'
import Main from '@/app/_features/layout/Main'
import CustomLink from '@/components/Link'

export default function Page() {
  return (
    <Main>
      <div className="w-full flex justify-center items-center">
        <div>
          <SignIn />

          <div className="mt-4 w-full text-center">
            <CustomLink
              href="/auth/sign-up"
              textNode={
                <span className="text-white font-bold underline">
                  新規登録へ
                </span>
              }
            />
          </div>
        </div>
      </div>
    </Main>
  )
}
