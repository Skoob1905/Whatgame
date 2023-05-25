import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		let { age, category } = req.query
		const games = await prisma.game.findMany({
			where: {
				ageRating: {
					lte: parseInt(age as string),
				},
				category: {
					equals: category as string,
				},
			},
		})
		res.status(200).send(games)
	}
}
