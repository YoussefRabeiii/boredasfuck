import { Liquid } from "@components";

import styles from "./styles.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="#">Bored As Fuck !</a>
				</h1>

				<div className={styles.description}>
					where I will be <code className={styles.code}>coding</code> some text
					animations and some other stupid little stuff{" "}
					<code className={styles.code}>no libraries allowed</code>{" "}
					<p style={{ fontSize: "1rem" }}>(cause I hate myself )</p>
				</div>

				<Liquid stroke text="Bored As Fuck" />
			</main>
		</div>
	);
}
