import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="author" content="Jeffrey Shum" />
					<meta property="og:image" content="/favicon-32x32.png" />
					<meta property="og:title" content="Cast Away" />
					<meta
						property="og:description"
						content="Podcast Searching Platform"
					/>
					<meta property="og:type" content="website" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
