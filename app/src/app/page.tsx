'use client'
import { Box, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Recommendations from 'components/Recommendations'
import Games from 'components/Games'
import React, { useState } from 'react'

export default function Home() {
	const { data: loggedIn } = useSession()
	const [games, setGames] = useState([])
	const [recommendations, setRecommendations] = useState([])
	if (loggedIn) {
		return (
			<Box
				w="100vw"
				h="100vh"
			>
				<Flex
					flexDirection="row"
					justifyContent="space-around"
				>
					<Games
						games={games}
						setGames={setGames}
						setRecommendations={setRecommendations}
					/>
					<Recommendations
						setRecommendations={setRecommendations}
						recommendations={recommendations}
					/>
				</Flex>
			</Box>
		)
	}
}
