import Navbar from 'components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
// import GameInfoProvider from 'providers/GameInfoContext'

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<ChakraProvider>
				{/* <GameInfoProvider> */}
				<Navbar />
				<Component {...pageProps} />
				{/* </GameInfoProvider> */}
			</ChakraProvider>
		</SessionProvider>
	)
}
