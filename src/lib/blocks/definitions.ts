import { Block, Prisma } from '@prisma/client'

export type BlockSelect = Pick<Block, 'id' | 'name'>

export const selectBlock = Prisma.validator<Prisma.BlockSelect>()({
  id: true,
  name: true,
})
