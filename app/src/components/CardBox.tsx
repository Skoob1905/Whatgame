import { Box, Flex, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import { ReactNode } from 'react'

type TGame = {
	gameId: string
}

type CardBoxProps = {
	children: ReactNode
	content: Array<TGame>
}

const CardBox = (props: CardBoxProps) => {
	const { content, children } = props
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
				overflowY="scroll"
			>
				{content?.length === 0 ? (
					<Text
						color="lightgray"
						opacity={0.7}
						mt="2rem"
						textAlign="center"
					>
						No Records showing
					</Text>
				) : (
					content?.map((game: TGame) => (
						<GameCard
							key={game.gameId}
							{...game}
						/>
					))
				)}
			</Box>
		</Flex>
	)
}

export default CardBox
