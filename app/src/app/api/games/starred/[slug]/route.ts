import { NextResponse, NextRequest } from 'next/server'
import prisma from 'lib/prisma'

export async function PUT(
	request: NextRequest,
	{
		params,
	}: {
		params: { slug: string }
	}
) {
	try {
		const slug = params.slug
		const { starred } = await prisma.game.findUniqueOrThrow({
			where: { gameId: slug },
		})
		const data = await prisma.game.update({
			data: { starred: !starred },
			where: { gameId: slug },
		})
		return NextResponse.json(data, {
			status: 200,
			statusText: 'Updated',
		})
	} catch (error) {
		return NextResponse.json(error, {
			status: 403,
			statusText: 'Failed',
		})
	}
}
