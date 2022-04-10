import { FC } from "react"
import { CardProps } from "../Card/Card"
import { useOverlay } from "../OverlayContext"
import styles from "./Overlay.module.css"

const Overlay: FC<CardProps> = (props) => {
	const { update } = useOverlay()

	if (!props.title) return <></>

	return (
		<section className={styles.overlay}>
			<button onClick={() => update({})}>Close</button>
			{props.title}
		</section>
	)
}

export default Overlay
