import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

function getPrismaConditions(age: string, category: string) {
	const ageParam = age && {
		ageRating: { lte: parseInt(age) },
	}
	const categoryParam = category && { genre: category }
	return { ...ageParam, ...categoryParam }
}

export async function GET(request: NextRequest) {
	const age = request.nextUrl.searchParams.get('age')
	const category = request.nextUrl.searchParams.get('category')
	const data = await prisma.game.findMany({
		where: getPrismaConditions(age, category),
	})
	return NextResponse.json({ data })
}
