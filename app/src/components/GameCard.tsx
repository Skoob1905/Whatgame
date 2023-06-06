import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import axios from 'axios'

const GameCard = (props: any) => {
	const [gameInfo, setGameInfo] = useState({
		gameId: null,
		ageRating: null,
		genre: null,
		name: null,
		starred: null,
	})

	useEffect(() => {
		setGameInfo(props)
	}, [])

	const { ageRating, genre, name, starred, gameId } = gameInfo

	async function handleSetStarred() {
		setGameInfo({ ...gameInfo, starred: !starred })
		await axios.put(`http://localhost:3000/api/games/starred/${gameId}`)
	}

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
				Name: <b>{name}</b>
			</Text>
			<Text color="black">
				Age: <b>{ageRating}</b>
			</Text>
			<Text color="black">
				Category: <b>{genre}</b>
			</Text>
			<IconButton
				onClick={handleSetStarred}
				aria-label="setFavorite"
				position="absolute"
				right="1rem"
				top="1rem"
			>
				{starred ? (
					<StarIcon style={{ color: 'yellow' }} />
				) : (
					<StarBorderIcon style={{ color: 'yellow' }} />
				)}
			</IconButton>
		</Box>
	)
}

export default GameCard
