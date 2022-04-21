import Link from "next/link"
import { FC } from "react"
import styles from "./Nav.module.css"

const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<div
				className={styles.logoContainer}
				onClick={() => (window.location.href = "/")}>
				<img
					className={styles.logo}
					src="/images/logo.svg"
					alt="Logo"
				/>
				<h1 className={styles.title}>Cast Away</h1>
			</div>
			<Link href="/saved" passHref={true}>
				<a className={styles.link}>Saved</a>
			</Link>
		</nav>
	)
}

export default Nav
