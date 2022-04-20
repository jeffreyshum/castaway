import { FC } from "react"
import { CardProps } from "../Card/Card"
import { useOverlay } from "../OverlayContext"
import styles from "./Overlay.module.css"

const Overlay: FC<CardProps> = (props) => {
	const { update } = useOverlay()

	if (!props.title) return <></>
	return (
		<section
			id="overlay"
			className={styles.overlay}
			onClick={(e: any) => {
				if (e.target.id === "overlay") update({})
			}}>
			<div className={styles.container}>
				<div className={styles.top}>
					<button
						id="close"
						onClick={() => update({})}
						className={styles.button}>
						x
					</button>
				</div>
				<img
					className={styles.splash}
					src={props.image}
					alt={`${props.title} logo`}
					onError={(e: any) => (e.target.src = "/images/default.png")}
				/>
				<div className={styles.center}>
					<h1 className={styles.title}>{props.title}</h1>
					<p>{props.author}</p>
					<div className={styles.genreContainer}>
						{props.categories &&
							Object.values(props.categories).map((entry) => (
								<label className={styles.genre} key={entry}>
									{entry.toString()}
								</label>
							))}
					</div>
					<p className={styles.description}>{props.description}</p>
				</div>
				<div className={styles.bottom}>
					<a
						className={styles.link}
						target="_blank"
						rel="noreferrer"
						href={props.link}>
						▶ Listen
					</a>
				</div>
			</div>
		</section>
	)
}

export default Overlay
