import { render } from '@testing-library/react'
import CardBox from '../CardBox'

describe('CardBox', () => {
	it('renders the correct amount of games', () => {
		const games = [
			{
				gameId: '1',
				title: 'Game 1',
				category: 'category 1',
				age: 8,
			},
			{
				gameId: '2',
				title: 'Game 2',
				category: 'category 2',
				age: 12,
			},
		]
		const { getAllByTestId } = render(<CardBox games={games} />)
		const gameCards = getAllByTestId('game-card')
		expect(gameCards.length).toBe(games.length)
	})
})
