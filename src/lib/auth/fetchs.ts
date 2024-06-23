'use server'

import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'
import { UserSelectForFindUser } from '@/lib/users/definitions'
import { findUserById } from '@/lib/users/fetchs'

export const fetchLoginUser = async (): Promise<
  UserSelectForFindUser | undefined
> => {
  const sessionToken = cookies().get('sessionToken')
  if (!sessionToken) return

  const secret = await prisma.secret.findFirst({
    select: { userId: true },
    where: { token: sessionToken.value },
  })
  if (!secret) return

  const user = await findUserById({ id: secret.userId })
  if (!user) return

  return user
}
