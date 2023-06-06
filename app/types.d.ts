export type TGame = {
	gameId: string
	genre: string
	category: string
	ageRating: number
	starred: Boolean
}

export type TRecommendation = {
	id: number
	game: TGame
	gameId: string
	createdAt: string
}
