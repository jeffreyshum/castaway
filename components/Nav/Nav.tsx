import { FC } from "react"
import styles from "./Nav.module.css"

const Nav: FC = () => {
	return (
		<nav
			className={styles.nav}
			onClick={() => (window.location.href = "/")}>
			<img className={styles.logo} src="/images/logo.svg" alt="Logo" />
			<h1 className={styles.title}>Cast Away</h1>
		</nav>
	)
}

export default Nav
