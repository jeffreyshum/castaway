import { FC } from "react"
import styles from "./Footer.module.css"

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p>
				Built with{" "}
				<a href="https://nextjs.org/">
					<img
						className={styles.footerLogo}
						src="/icons/next.svg"
						alt="NextJS Logo"
					/>
				</a>
				<br></br>
				Copyright © {new Date().getFullYear()} Jeffrey Shum. All Rights
				Reserved.
				<a href="https://github.com/jeffreyshum/castaway">
					<img
						className={styles.footerLogo}
						src="/icons/github.png"
						alt="GitHub"
					/>
				</a>
			</p>
		</footer>
	)
}

export default Footer
