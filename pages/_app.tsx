import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta charSet="UTF-8" />
				<title>Cast Away</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
