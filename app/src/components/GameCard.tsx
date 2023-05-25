import React, { useState, useContext, useReducer } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import EditIcon from '@mui/icons-material/Edit'
import GameForm from './GameForm'
// import { GameContextInfo } from 'providers/GameInfoContext'

const GameCard = (props) => {
	const { gameId, title, ageRating, category } = props
	const [showModal, setShowModal] = useState(false)

	return (
		<Box
			m="0.5rem"
			bg="lightgray"
			borderRadius="10px"
			h="5rem"
			pl="25%"
			position="relative"
		>
			<Text color="black">
				Name: <b>{title}</b>
			</Text>
			<Text color="black">
				Age: <b>{ageRating}</b>
			</Text>
			<Text color="black">
				Category: <b>{category}</b>
			</Text>
			<Button onClick={() => setShowModal(true)}>
				<EditIcon />
			</Button>
			{showModal && (
				<GameForm
					gameId={gameId}
					isOpen={showModal}
					onClose={() => setShowModal(false)}
				/>
			)}
		</Box>
	)
}

export default GameCard
