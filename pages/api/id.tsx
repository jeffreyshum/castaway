import { NextApiRequest, NextApiResponse } from "next"
import PodcastIndexClient from "podcastdx-client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { query } = req.query

	if (!query) {
		res.status(400).json({ error: "Missing Query Parameter" })
		return
	}

	const client = new PodcastIndexClient({
		key: process.env.API_KEY,
		secret: process.env.API_SECRET,
		disableAnalytics: true,
	})

	await client
		.podcastById(Number.parseInt(query.toString()))
		.then((results) => {
			res.status(200).json(results.feed)
		})
}

export default handler
