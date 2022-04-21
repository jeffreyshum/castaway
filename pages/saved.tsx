import { NextPage } from "next"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Card, { CardProps } from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import Overlay from "../components/Overlay/Overlay"
import OverlayContext from "../components/OverlayContext"
import styles from "../styles/Saved.module.css"

const Anime = dynamic(import("react-anime"), { ssr: false })

const SavedPage: NextPage = () => {
	const [data, setData] = useState<any>([])
	const [viewableResults, setViewableResults] = useState<any>(<></>)
	const [selected, setSelected] = useState<any>()
	const [update, setUpdate] = useState(true)

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("saved") || "[]")
		if (saved.length === data.length) return
		setData(saved)
	}, [update])

	useEffect(() => {
		window.setTimeout(() => setUpdate(!update), 3000)
	})

	useEffect(() => {
		setViewableResults(<></>)
		if (!data) return

		const info = data.map(
			async (element: number) =>
				await fetch(`/api/id?query=${element}`)
					.then((response) => response.json())
					.then((data) => {
						return <Card {...data} key={data.id} />
					})
		)

		Promise.all(info).then((results) => setViewableResults(results))
	}, [data])

	return (
		<OverlayContext.Provider
			value={{ selected: selected, update: setSelected }}>
			<Overlay {...selected} />
			<Nav />
			<h1>Saved Podcasts</h1>
			<section className={styles.viewSection}>
				{viewableResults.length === 0 && <h2>No Podcasts Saved</h2>}
				<Anime
					translateX="270"
					loop={false}
					delay={(el: HTMLElement, index: number) => index * 50}
					direction="alternate">
					{viewableResults}
				</Anime>
			</section>
			<Footer />
		</OverlayContext.Provider>
	)
}

export default SavedPage
