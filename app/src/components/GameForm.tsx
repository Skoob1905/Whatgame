import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react'
import React from 'react'
import { submit } from './actions'
// import GameInfoReducer from 'providers/GameInfoReducer'
// import { useReducer } from 'react'

const GameFormModal = (props: GameFormModal) => {
	const { gameId, isOpen, onClose } = props
	const redis = new Redis()

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>
					<h3>Game Info</h3>
				</ModalHeader>
				<ModalBody>
					<form action={submit}>
						<input
							placeholder="Title"
							className="block"
						/>
						<input
							placeholder="Age"
							className="block"
						/>
						<input
							placeholder="Category"
							className="block"
						/>
						<button type="submit">Find</button>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

type GameFormModal = {
	isOpen: boolean
	onClose: () => void
	gameId: number
}

export default GameFormModal
