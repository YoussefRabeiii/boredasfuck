"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import styles from "./styles.module.css";

const Slide = ({ children, delay, inverted, repeatable }) => {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: repeatable ? false : true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInview) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, isInview]);

	return (
		<div className={styles.container}>
			<motion.div
				ref={ref}
				variants={{
					hidden: {
						opacity: 0,
						translateX: inverted ? -70 : 70,
					},
					visible: { opacity: 1, translateX: 0 },
				}}
				transition={{
					type: "spring",
					duration: 0.2,
					damping: 8,
					delay: delay - 0.2,
					stiffness: 100,
				}}
				initial="hidden"
				animate={controls}>
				{children}
			</motion.div>
		</div>
	);
};

export default Slide;
