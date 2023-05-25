'use client'

import React, { FormEvent, useState } from 'react'
import { Input, Button, Text, SimpleGrid } from '@chakra-ui/react'
import CardBox from 'components/CardBox'
import axios from 'axios'

const Games = () => {
	const [age, setAge] = useState('')
	const [category, setCategory] = useState('')
	const [games, setGames] = useState([])
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
	const handleAgeChange = (e: FormEvent<HTMLInputElement>) => {
		setAge(e.currentTarget.value)
	}
	const handleCategoryChange = (e: FormEvent<HTMLInputElement>) => {
		setCategory(e.currentTarget.value)
	}

	const getParams = () => {
		return category == '' ? { age } : { age, category }
	}

	const handleSearch = async () => {
		setShowErrorMessage(false)
		if (age == '') {
			setShowErrorMessage(true)
			return
		}
		axios
			.get('http://localhost:3000/api/games', {
				params: getParams(),
			})
			.then((res) => setGames(res.data))
	}

	const handleSave = () => {
		const data = games.map(({ gameId }) => {
			return {
				gamerId: 'Joseph',
				gameId: gameId.toString(),
				dateRecommended: new Date(),
			}
		})

		axios.post('http://localhost:3000/api/recommendations', {
			data,
		})
	}

	const handleClear = () => {
		setGames([])
		setCategory('')
		setAge('')
	}

	return (
		<CardBox games={games}>
			{showErrorMessage && (
				<Text
					color="red"
					textAlign="center"
				>
					Please give an age
				</Text>
			)}
			<SimpleGrid
				columns={2}
				spacing={5}
				m={5}
			>
				<Input
					placeholder="Age"
					onChange={handleAgeChange}
					value={age}
				/>
				<Input
					placeholder="Category"
					onChange={handleCategoryChange}
					value={category}
				/>
				<Button onClick={handleSearch}>Search</Button>
				<Button onClick={handleSave}>Save</Button>
				<Button onClick={handleClear}>Clear</Button>
			</SimpleGrid>
		</CardBox>
	)
}

export default Games
