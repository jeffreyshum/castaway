import { FC } from "react"
import styles from "./Card.module.css"

interface CardProps {
	id: number
	title: string
	url: string
	originalUrl: string
	description: string
	author: string
	image: string
	language: string
	link: string
}

const Card: FC<CardProps> = (props) => {
	return (
		<div className={styles.card}>
			<div>
				<img
					className={styles.logo}
					src={props.image}
					alt={`${props.title} logo`}
					onError={(e: any) => (e.target.src = "/images/default.png")}
				/>
			</div>
			<div>
				<h1>
					<a
						className={styles.link}
						target="_blank"
						rel="noreferrer"
						href={props.link}>
						{props.title.length > 50
							? props.title.substring(0, 49) + " . . ."
							: props.title}
					</a>
				</h1>
				<h2 className={styles.author}>{`By ${
					props.author.length > 30
						? props.author.substring(0, 30) + " . . ."
						: props.author
				}`}</h2>
			</div>
			<p>
				{props.description.length > 150
					? props.description.substring(0, 149) + " . . ."
					: props.description}
			</p>
		</div>
	)
}

export default Card
