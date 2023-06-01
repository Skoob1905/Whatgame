import { NextRequest, NextResponse } from 'next/server'
import prisma from 'lib/prisma'

export async function POST(request: NextRequest) {
	try {
		await prisma.recommendation.deleteMany()
		const gamesWhichAreStarred = await prisma.game.findMany({
			where: { starred: true },
			select: {
				gameId: true,
			},
		})

		const record = await prisma.recommendation.createMany({
			data: gamesWhichAreStarred,
		})

		return NextResponse.json(
			{
				...record,
				recommendationsSaved: gamesWhichAreStarred,
			},
			{
				status: 201,
				statusText: 'Created',
			}
		)
	} catch (error) {
		return NextResponse.json(error, {
			status: 403,
			statusText: 'Failed',
		})
	}
}

export async function GET(request: NextRequest) {
	try {
		const records = await prisma.recommendation.findMany()
		return NextResponse.json(records, {
			status: 200,
			statusText: 'Retrieved',
		})
	} catch (error) {
		return NextResponse.json(error, {
			status: 403,
			statusText: 'Failed',
		})
	}
}
