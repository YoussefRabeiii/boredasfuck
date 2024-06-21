import styles from "./styles.module.css";

const PantoneCard = ({ name, colorHex }) => {
	return (
		<div className={styles.card}>
			<div
				style={{
					backgroundColor: `#${colorHex}`,
				}}
				className={styles.colorContainer}
			/>

			<div className={styles.colorInfo}>
				<h1 className={styles.colorName}>{name}</h1>
				<p className={styles.colorHex}>#{colorHex}</p>
			</div>
		</div>
	);
};

export default PantoneCard;
