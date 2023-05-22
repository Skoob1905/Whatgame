import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type Recommendation = {
	gamerId: string
	gameId: string
	dateRecommended: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = req.headers.authorization
	if (!token)
		res.send({
			error: 'You need to sign in to retrieve/get your recommendations',
		})

	if (req.method === 'GET') {
		const recommendations = await prisma.recommendation.findMany()
		res.status(200).send(recommendations)
	} else if (req.method === 'POST') {
		const [...recommendations]: Array<Recommendation> = req.body
		await prisma.recommendation.createMany({ data: recommendations })
		const getRecommendationsWithUUID = await prisma.recommendation.findMany()
		res.status(201).json({
			dateCreated: '18/05/2023',
			count: recommendations.length,
			recommendations: getRecommendationsWithUUID,
		})
	}
}
