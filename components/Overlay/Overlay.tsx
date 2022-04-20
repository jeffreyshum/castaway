import { FC, useEffect, useRef, useState } from "react"
import { CardProps } from "../Card/Card"
import { useOverlay } from "../OverlayContext"
import styles from "./Overlay.module.css"

const Overlay: FC<CardProps> = (props) => {
	const { update } = useOverlay()
	const [image, setImage] = useState("")
	const [message, setMessage] = useState("")
	const [alert, setAlert] = useState(styles.alertHidden)
	const chest: any = useRef()

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("saved") || "[]")

		!saved.includes(props.id)
			? setImage("/images/chest-closed.png")
			: setImage("/images/chest-open.png")
	}, [props.id])

	useEffect(() => {
		setAlert(styles.alertVisibile)
		setTimeout(() => setAlert(styles.alertHidden), 200)
	}, [message])
	if (!props.title) return <></>

	const handleSave = () => {
		const saved = JSON.parse(localStorage.getItem("saved") || "[]")

		if (!saved.includes(props.id)) {
			saved.push(props.id)
			setImage("/images/chest-open.png")
			setMessage("Podcast Saved")
		} else {
			saved.splice(saved.indexOf(props.id), 1)
			setImage("/images/chest-closed.png")
			setMessage("Podcast Un-Saved")
		}

		localStorage.setItem("saved", JSON.stringify(saved))
	}

	return (
		<section
			id="overlay"
			className={styles.overlay}
			onClick={(e: any) => {
				if (e.target.id === "overlay") update({})
			}}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.left}>
						<button
							className={styles.save}
							onClick={handleSave}
							onMouseOver={() =>
								(chest.current.src = "/images/chest-open.gif")
							}
							onMouseLeave={() => (chest.current.src = image)}>
							<img
								className={styles.chest}
								src={image}
								alt="save"
								ref={chest}
								title="Bookmark"
							/>
						</button>
						<label className={alert}>{message}</label>
					</div>
					<div className={styles.right}>
						<button
							id="close"
							onClick={() => update({})}
							className={styles.button}>
							x
						</button>
					</div>
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
