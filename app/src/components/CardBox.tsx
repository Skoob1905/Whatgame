import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import GameCard from './GameCard'

type Game = {
	gameId: string
	title: string
	category: string
	age: number
}

type CardBoxProps = {
	games: Game[]
	children: React.ReactNode
}

const CardBox = (props: CardBoxProps) => {
	const { games, children } = props
	return (
		<Flex
			flexDirection="column"
			w="30%"
			mt="5rem"
			justifyContent="center"
		>
			{children}
			<Box
				border="1px solid white"
				h="30rem"
			>
				{games?.map(({ gameId, ...gameProps }) => (
					<GameCard
						key={gameId}
						{...gameProps}
					/>
				))}
			</Box>
		</Flex>
	)
}

export default CardBox
