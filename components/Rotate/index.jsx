"use client";

import { useEffect, useState, useId } from "react";

const isInViewPort = (element) => {
	let rect = element.getBoundingClientRect();
	return rect.top <= window.innerHeight && rect.bottom >= 0;
};

const Rotate = ({ children }) => {
	let id = useId();

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			let element = document.getElementById(id);
			isInViewPort(element) ? setScrollY(window.scrollY) : null;
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [id]);

	// if (typeof window !== "undefined") {
	// 	let element = document.getElementById(id);
	// 	let { top, bottom } = element.getBoundingClientRect();

	// 	console.log(
	// 		`Top: ${Math.floor(top)}, Bottom: ${Math.floor(
	// 			bottom
	// 		)}, ScrollY: ${Math.floor(window.scrollY)} ScreenH: ${Math.floor(
	// 			window.innerHeight
	// 		)} isInViewport: ${isInViewport(element)}`
	// 	);
	// }

	return (
		<div
			id={id}
			style={{
				transition: "all 0.3s linear",
				rotate: `${scrollY * 0.2 - 50}deg`,
			}}>
			{children}
		</div>
	);
};

export default Rotate;
