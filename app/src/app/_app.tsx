'use server'
import React from 'react'

type App = {
	Component: React.ReactNode
}

export default function App({ Component, pageProps }: App) {
	return <Component {...pageProps} />
}
