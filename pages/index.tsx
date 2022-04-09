import { NextPage } from "next"
import { FormEvent, useEffect, useState } from "react"

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
		}[]
	}
}

const IndexPage: NextPage = () => {
	const [query, setQuery] = useState("")
	const [viewableResults, setViewableResults] = useState<any>()

	useEffect(() => {
		if (!query) return

		fetch(`/api/search?query=${query}`)
			.then((response) => response.json())
			.then((data: ApiResponse) =>
				setViewableResults(
					data.podcasts.results.map((entry) => {
						return entry.title
					})
				)
			)
	}, [query])

	return (
		<>
			<form
				onSubmit={(e: FormEvent<any>) => {
					e.preventDefault()
					setQuery(e.currentTarget.elements.search.value)
				}}>
				<input
					type="text"
					placeholder="Search Podcasts"
					name="search"
				/>
			</form>
			{viewableResults}
		</>
	)
}

export default IndexPage
