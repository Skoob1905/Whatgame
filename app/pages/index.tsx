import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import GameCard from '../components/GameCard'
import { fetchApiResponse } from '../utils/methods'

export default function Home(props: any) {
	const { games, recommendations } = props
	return (
		<div>
			<Box
				w="100vw"
				h="100vh"
			>
				<Box
					w="100%"
					h="10rem"
					m="0.5rem"
					textAlign="center"
					mt="auto"
					bg="#DBDFAA"
				>
					<Text
						color="#73A9AD"
						fontSize="15pt"
					>
						WhatGame
					</Text>
				</Box>
				<Flex flexDirection="row">
					<Box h="100%">
						<Flex h="5rem">
							<Input w="3rem" />
							<Button w="3rem"> Search </Button>
						</Flex>
						<Button w="3rem"> Save </Button>
						<Flex
							flexDirection="column"
							bg="white"
							borderRadius="10px"
						>
							{games.map(({ ...props }) => (
								<GameCard {...props} />
							))}
						</Flex>
					</Box>
					<Box h="100%">
						<Box h="5rem">
							<Button w="3rem"> Search </Button>
							<Text>Last Recommendation: 13/04/2021</Text>
						</Box>

						<Flex
							flexDirection="column"
							bg="white"
							borderRadius="10px"
						>
							{recommendations.map(({ ...props }) => (
								<GameCard {...props} />
							))}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</div>
	)
}

export async function getServerSideProps(context: any) {
	const gamesList = await fetchApiResponse<unknown, unknown>('GET', 'games')
	const recommendations = await fetchApiResponse<unknown, unknown>(
		'GET',
		'recommendations',
		null,
		'My Test Token'
	)

	return {
		props: {
			games: gamesList,
			recommendations,
		},
	}
}
