import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { STATUS_CODE } from '@/lib/status-code'

type Context = { params: { id: string } }

export async function PUT(request: NextRequest, { params }: Context) {
  const body = await request.json()

  try {
    await prisma.block.update({
      where: { id: params.id },
      data: { name: body.name },
    })
    return NextResponse.json(
      {
        message: 'Success: ブロックを編集しました!!',
        status: STATUS_CODE.SUCCESS,
      },
      {},
    )
  } catch (error) {
    return NextResponse.json({
      message: 'Database Error: ブロック編集に失敗しました',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
    })
  }
}
