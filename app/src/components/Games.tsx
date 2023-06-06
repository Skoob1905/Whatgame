'use client'
import React, { useContext, useState } from 'react'
import {
	Input,
	Button,
	Text,
	SimpleGrid,
	Toast,
	useToast,
} from '@chakra-ui/react'
import CardBox from 'components/CardBox'
import axios from 'axios'
import { AppContext } from 'providers/AppContext'

const Games = ({ games, setGames, setRecommendations }) => {
	const toast = useToast()

	const getParams = () => {
		const age = document.getElementById('age').value
		const category = document.getElementById('category').value
		const ageParam = age && { age }
		const categoryParam = category && { category }

		return { ...ageParam, ...categoryParam }
	}

	const handleSearch = () => {
		axios
			.get('http://localhost:3000/api/games', {
				params: getParams(),
			})
			.then((res) => {
				setGames(res.data.data)
			})
	}

	const handleSave = async () => {
		const res = await axios.post('http://localhost:3000/api/recommendations')
		setRecommendations(res.data.data)
		toast({
			status: 'info',
			position: 'top',
			isClosable: true,
			duration: 3000,
			containerStyle: {
				marginTop: '2rem',
			},
			title: 'Favourites Saved',
			description:
				'You can now retrieve your recommendations at any time using retrieve recommendations',
		})
	}

	const handleClear = () => {
		setGames([])
	}

	return (
		<CardBox content={games}>
			<SimpleGrid
				columns={2}
				spacing={5}
				m={5}
			>
				<Input
					placeholder="Age"
					id="age"
				/>
				<Input
					placeholder="Category"
					id="category"
				/>
				<Button onClick={handleSearch}>Search</Button>
				<Button onClick={handleSave}>Save</Button>
				<Button onClick={handleClear}>Clear</Button>
				{/* <Button onClick={() => setShowModal(true)}>Add Game</Button> */}
			</SimpleGrid>
		</CardBox>
	)
}

export default Games
