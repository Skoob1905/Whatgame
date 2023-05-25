import React from 'react'
import { render } from '@testing-library/react'
import CardBox from '../CardBox'

describe('CardBox component', () => {
	test('should not overflow cards from parent container', () => {
		// Create a sample list of games
		const games = [
			{ id: 1, title: 'Game 1' },
			{ id: 2, title: 'Game 2' },
			{ id: 3, title: 'Game 3' },
			{ id: 4, title: 'Game 4' },
			{ id: 5, title: 'Game 5' },
		]

		// Render the CardBox component with the games list
		const { container } = render(<CardBox games={games} />)

		// Get the parent container element
		const parentContainer = container.querySelector('div')

		// Get the box element containing the games
		const boxElement = container.querySelector('div > div')

		// Check if the height of the box element is less than or equal to the parent container height
		expect(boxElement.offsetHeight).toBeLessThanOrEqual(
			parentContainer.offsetHeight
		)
	})
})
