import { Prisma, User } from '@prisma/client'

export type UserSelectForFindUser = Pick<User, 'id' | 'name'>

export const selectUserForFindUser = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
})

export const selectUserForLogin = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  secret: {
    select: {
      id: true,
    },
  },
})
