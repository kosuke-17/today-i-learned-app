/**
 * next-env.d.tsでは変更しない
 *
 * @see : https://nextjs.org/docs/pages/building-your-application/configuring/typescript#custom-type-declarations
 */
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}
