import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import EditIcon from '@mui/icons-material/Edit'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'

const GameCard = (props) => {
	const { title, ageRating, category } = props
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
			<Link href="/game/1">
				<EditIcon />
			</Link>
		</Box>
	)
}

export default GameCard
