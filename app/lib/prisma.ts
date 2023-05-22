// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

var prisma = new PrismaClient()

if (!global.prisma) {
	global.prisma = new PrismaClient()
}
prisma = global.prisma

export default prisma
