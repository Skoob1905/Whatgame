import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const { age, category } = req.query

		const games = await prisma.game.findMany({
			where: {
				ageRating: {
					lte: parseInt(age),
				},
				category: {
					equals: category,
				},
			},
		})
		res.status(200).send(games)
	}
}
