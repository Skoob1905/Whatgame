import React from 'react'

const GameForm = ({
	title: string
	category: string
	age: string
}: GameForm) => {
	
	async function submit() {
		'use server'
	}

	return (
		<div>
			<form action={submit}>
				<input value={} />
				<input />
				<button>Find</button>
			</form>
		</div>
	)
}

type GameForm = {
	title: string
	category: string
	age: string
}

export default GameForm
