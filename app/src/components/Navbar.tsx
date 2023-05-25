import { Button, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
	const { data } = useSession()

	return (
		<Box
			w="100%"
			h="3rem"
			textAlign="center"
			pt="2rem"
		>
			<Button
				position="absolute"
				right="2rem"
				top="2rem"
				onClick={data?.user?.name ? () => signOut() : () => signIn()}
			>
				{data?.user?.name ? (
					<Text>{data?.user?.name}</Text>
				) : (
					<Text>Sign in</Text>
				)}
			</Button>
			<Text fontSize="18pt">WhatGame</Text>
		</Box>
	)
}

export default Navbar
