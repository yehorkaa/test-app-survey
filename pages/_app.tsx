import type { AppProps } from 'next/app'

import MainProvider from '../app/providers/MainProvider'
import '../styles/global.css'

type TypeAppPros = AppProps

function MyApp({ Component, pageProps }: TypeAppPros) {
	return (
		<MainProvider>
				<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
