import { User } from '@prisma/client'

import { prisma } from '@/lib/prisma'

import { selectUserForFindUser } from './definitions'

export const findUserById = async ({ id }: { id: User['id'] }) => {
  return await prisma.user.findFirst({
    where: { id },
    select: selectUserForFindUser,
  })
}
