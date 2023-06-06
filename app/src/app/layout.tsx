'use client'
import AuthContext from './AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from 'components/Navbar'
import { AppContextProvider } from 'providers/AppContext'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ChakraProvider>
					<AuthContext>
						{/* <AppContextProvider> */}
						<Navbar />
						{children}
						{/* </AppContextProvider> */}
					</AuthContext>
				</ChakraProvider>
			</body>
		</html>
	)
}
