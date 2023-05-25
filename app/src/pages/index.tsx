'use client'
import { Box, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Recommendations from 'components/Recommendations'
import Games from 'components/Games'

export default function Home() {
	const { data: loggedIn } = useSession()
	if (loggedIn) {
		return (
			<Box
				w="100vw"
				h="100vh"
			>
				<Flex
					flexDirection="row"
					justifyContent="space-around"
				>
					<Games />
					<Recommendations />
				</Flex>
			</Box>
		)
	}
}
