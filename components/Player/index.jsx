"use client";

import { useRef, useEffect } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";

import styles from "../../app/styles.module.css";
import { videoPoster } from "@assets";

const getOS = () => {
	if (typeof window === "undefined") return "Server";

	const userAgent = window.navigator.userAgent;
	const platform = window.navigator?.userAgentData?.platform;

	const iosPlatforms = ["iPhone", "iPad", "iPod"];
	const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
	const macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"];

	let os = null;
	let isMobile = false;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = "Mac OS";
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = "iOS";
		isMobile = true;
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = "Windows";
	} else if (/Android/.test(userAgent)) {
		os = "Android";
		isMobile = true;
	} else if (/Linux/.test(platform)) {
		os = "Linux";
	}

	return {
		os,
		isMobile,
	};
};

export const Player = ({
	type = "video/webm",
	poster = videoPoster.src,
	desktopSrc = "/sushi.webm",
	isMobile = getOS().isMobile,
	mobileSrc = "/sushiMobile.webm",
}) => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videojs(videoRef.current, {
				poster,
				loop: true,
				muted: true,
				autoplay: true,
				controls: false,
				playsinline: true,
				sources: [{ src: isMobile ? mobileSrc : desktopSrc, type }],
			});
		}
	});

	return (
		<div className={styles.video}>
			<video ref={videoRef} className={styles.video} />
		</div>
	);
};

export default Player;
