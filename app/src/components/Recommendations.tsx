import React from 'react'
import { Button } from '@chakra-ui/react'
import CardBox from 'components/CardBox'
import axios from 'axios'
import { TRecommendation } from '../../types'

type RecommendationsProps = {
	recommendations: Array<TRecommendation>
	setRecommendations: ([]) => void
}

const Recommendations = ({
	recommendations,
	setRecommendations,
}: RecommendationsProps) => {
	const handleClick = async () => {
		const { data: rawResponse } = await axios.get(
			'http://localhost:3000/api/recommendations/'
		)
		const processedResponse = await Promise.all(
			rawResponse.map(async ({ gameId }: TRecommendation) => {
				const {
					data: { data },
				} = await axios.get(`http://localhost:3000/api/games/${gameId}`)
				return data
			})
		)

		setRecommendations(processedResponse)
	}

	return (
		<CardBox content={recommendations}>
			<Button
				mx="auto"
				mb="2rem"
				onClick={handleClick}
			>
				Retrieve Saved
			</Button>
			<Button
				mx="auto"
				mb="2rem"
				onClick={() => setRecommendations([])}
			>
				Clear
			</Button>
		</CardBox>
	)
}

export default Recommendations
