'use server'

import { randomUUID } from 'crypto'
import { revalidatePath } from 'next/cache'

import { PATH } from '@/constant/path'
import { prisma } from '@/lib/prisma'
import { STATUS_CODE, StatusCodeType } from '@/lib/status-code'

export type FormState = {
  errors?: {
    name?: string[]
  }
  message: string
  status: StatusCodeType | null
}

export const createBlock = async (
  _: FormState,
  __: FormData,
): Promise<FormState> => {
  const uuid = randomUUID()

  const blockType = await prisma.blockType.findFirst({
    where: { name: 'text' },
    select: { id: true },
  })
  const blockTypeId = blockType?.id

  if (!blockTypeId)
    return {
      message: 'Not Found Error: 紐付けるブロックタイプが存在しませんでした',
      status: STATUS_CODE.NOT_FOUND,
    }

  try {
    await prisma.block.create({
      data: {
        id: uuid,
        hierarchyId: uuid,
        blockTypeId: blockType.id,
        name: null,
      },
    })

    revalidatePath(PATH.BLOCKS)
    return {
      message: 'Success: ブロックを作成しました!!',
      status: STATUS_CODE.SUCCESS,
    }
  } catch (error) {
    return {
      message: 'Database Error: ブロック作成に失敗しました',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
    }
  }
}
