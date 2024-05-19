import { prisma } from '@/lib/prisma'

import { BlockSelect, selectBlock } from './definitions'

export const fetchBlocks = async (): Promise<BlockSelect[]> => {
  try {
    const blocks = await prisma.block.findMany({
      select: selectBlock,
    })

    return blocks
  } catch (e) {
    console.error('Database Error:', e)
    throw new Error('Failed to fetch blocks.')
  }
}
