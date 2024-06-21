"use client";

import { Liquid } from "@components";

import styles from "./styles.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://youssefrabei.vercel.app?utm_source=boredAsFuck"
				target="_blank"
				rel="noopener noreferrer">
				Made by one stupid bored sleepless
				<span style={{ marginInlineStart: "-55px", marginBlockEnd: "-5px" }}>
					<Liquid text="Youssef Rabei" fontSize="8px" width="250px" />
				</span>
			</a>
		</footer>
	);
};

export default Footer;
