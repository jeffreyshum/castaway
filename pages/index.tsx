import { NextPage } from "next"
import { FormEvent, useEffect, useState } from "react"
import Card from "../components/Card/Card"
import styles from "../styles/index.module.css"
import dynamic from "next/dynamic"
import OverlayContext from "../components/OverlayContext"
import Overlay from "../components/Overlay/Overlay"

const Anime = dynamic(import("react-anime"), { ssr: false })

interface ApiResponse {
	podcasts: {
		count: number
		results: {
			id: number
			title: string
			url: string
			originalUrl: string
			description: string
			author: string
			image: string
			language: string
			link: string
			categories: { [key: number]: string }
		}[]
	}
}

const IndexPage: NextPage = () => {
	const [query, setQuery] = useState("")
	const [viewableResults, setViewableResults] = useState<any>()
	const [selected, setSelected] = useState<any>()

	useEffect(() => {
		if (!query) return

		setViewableResults(<></>)

		fetch(`/api/search?query=${query}`)
			.then((response) => response.json())
			.then((data: ApiResponse) => {
				if (!data.podcasts.results.entries) {
					setViewableResults("No Podcasts Could Be Found")
				} else {
					setViewableResults(
						data.podcasts.results.map((entry) => (
							<Card {...entry} key={entry.title} />
						))
					)
				}
			})
	}, [query])

	return (
		<OverlayContext.Provider
			value={{ selected: selected, update: setSelected }}>
			<Overlay {...selected} />
			<form
				className={styles.form}
				onSubmit={(e: FormEvent<any>) => {
					e.preventDefault()
					setQuery(e.currentTarget.elements.search.value)
				}}>
				<input
					className={styles.input}
					type="text"
					placeholder="Search Podcasts"
					name="search"
					autoFocus
					autoComplete="off"
				/>
			</form>
			<section className={styles.viewSection}>
				{viewableResults && (
					<Anime
						translateX="270"
						loop={false}
						delay={(el: HTMLElement, index: number) => index * 50}
						direction="alternate">
						{viewableResults}
					</Anime>
				)}
			</section>
		</OverlayContext.Provider>
	)
}

export default IndexPage
