import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const GameCard = (props: any) => {
	return (
		<Box
			mx="0.5rem"
			bg="#B3C890"
			borderRadius="10px"
			h="5rem"
			pl="25%"
		>
			<Text>Call Of Duty</Text>
			<Text>FPS</Text>
			<Text>18</Text>
		</Box>
	)
}

export default GameCard
