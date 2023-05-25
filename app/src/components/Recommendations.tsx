'use client'
import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import CardBox from 'components/CardBox'
import axios from 'axios'

const Recommendations = () => {
	const [games, setGames] = useState([])

	const handleClick = () => {
		axios
			.get('http://localhost:3000/api/recommendations')
			.then((res) => console.log(res))
	}

	return (
		<CardBox games={games}>
			<Button
				mx="auto"
				mb="2rem"
				onClick={handleClick}
			>
				Retrieve Saved
			</Button>
			<Button
				mx="auto"
				mb="2rem"
				onClick={() => setGames([])}
			>
				Clear
			</Button>
		</CardBox>
	)
}

export default Recommendations
