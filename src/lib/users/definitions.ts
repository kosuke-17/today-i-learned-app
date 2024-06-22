import { Prisma } from '@prisma/client'

export const selectUserForLogin = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  secret: {
    select: {
      id: true,
    },
  },
})
