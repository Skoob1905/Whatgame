import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import GameCard from './GameCard'

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
				{games?.map(({ ...gameProps }, idx: number) => (
					<GameCard
						key={idx}
						{...gameProps}
					/>
				))}
			</Box>
		</Flex>
	)
}

export default CardBox
