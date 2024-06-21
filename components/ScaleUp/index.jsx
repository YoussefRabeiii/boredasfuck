"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const initialScale = 0.2;
const initialBlur = 15;

const ScaleUp = ({ children, repeatable, duration = 0.5, style }) => {
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
		<div>
			<motion.div
				ref={ref}
				style={style}
				animate={controls}
				transition={{ duration }}
				initial={{
					scale: initialScale,
					filter: `blur(${initialBlur}px)`,
					opacity: 0,
				}}
				variants={{
					hidden: { scale: initialScale, filter: "blur(0px)", opacity: 0 },
					visible: { scale: 1, blur: 0, opacity: 1 },
				}}>
				{children}
			</motion.div>
		</div>
	);
};

export default ScaleUp;
