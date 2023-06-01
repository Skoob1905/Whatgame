import { NextResponse, NextRequest } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function GET(
	request: NextRequest,
	{
		params,
	}: {
		params: { slug: string }
	}
) {
	const slug = params.slug
	const data = await prisma.game.findUnique({ where: { gameId: slug } })
	return NextResponse.json({ data })
}
