/**
 * @see: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
 */
import { PrismaClient } from '@prisma/client'
import 'server-only'

export const prisma = global.prisma || new PrismaClient({ log: ['query'] })

if (process.env.NODE_ENV != 'production') global.prisma = prisma
