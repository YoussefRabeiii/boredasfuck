"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Link as SLink, animateScroll as scroll } from "react-scroll";

import { ScaleUp } from "@components";
import { logo, chopstick } from "@assets";

import styles from "./styles.module.css";

const Nav = () => {
	const [navBg, setNavBg] = useState(false);
	const [burgerActive, setBurgerActive] = useState(false);
	const [navHeight, setNavHeight] = useState(
		typeof window !== "undefined"
			? document.getElementById("nav").offsetHeight
			: 0
	);

	typeof window !== "undefined"
		? window.addEventListener("resize", () => {
				setNavHeight(document.getElementById("nav").offsetHeight);
		  })
		: null;

	const changeNavBg = () => {
		window.scrollY >= 10 ? setNavBg(true) : setNavBg(false);
	};

	const closeNav = () => {
		setTimeout(() => {
			document.getElementById("burgerMenu").click();
		}, 500);
	};

	useEffect(() => {
		// check if window is desktop or mobile
		if (typeof window !== "undefined") {
			if (window.innerWidth <= 768) {
				// Do Nothing on Mobile
			} else {
				window.scrollY >= 500 ? setNavBg(true) : setNavBg(false);
				window.addEventListener("scroll", changeNavBg);
				return () => {
					window.removeEventListener("scroll", changeNavBg);
				};
			}
		}
	}, []);

	return (
		<>
			<nav
				id="nav"
				className={`${styles.nav} ${navBg && styles.navBg}`}
				onScroll={changeNavBg}>
				<div className={styles.navContainer}>
					<span className={styles.container}>
						<ul className={styles.navLinks}>
							<li>
								<SLink
									to="hero"
									spy={true}
									smooth={true}
									// isDynamic={true}
									offset={-navHeight}
									className={styles.navLink}
									activeClass={styles.navLinkActive}>
									Home
								</SLink>
							</li>
							<li>
								<SLink
									to="about"
									spy={true}
									smooth={true}
									offset={-navHeight}
									className={styles.navLink}
									activeClass={styles.navLinkActive}>
									About
								</SLink>
							</li>
							<li>
								<SLink
									to="bowl"
									spy={true}
									smooth={true}
									offset={-navHeight}
									className={styles.navLink}
									activeClass={styles.navLinkActive}>
									Bowl
								</SLink>
							</li>
						</ul>
					</span>

					<span className={styles.logoContainer}>
						<ScaleUp>
							<Image
								src={logo}
								width={170}
								height={110}
								priority={true}
								alt="Sakura Logo"
								className={styles.logo}
								onClick={() => {
									scroll.scrollToTop();
								}}
							/>
						</ScaleUp>
					</span>

					<span className={styles.container}>
						<ul className={styles.navLinks}>
							<li>
								<SLink
									to="menu"
									spy={true}
									smooth={true}
									offset={-navHeight}
									className={styles.navLink}
									activeClass={styles.navLinkActive}>
									Menu
								</SLink>
							</li>
							<li>
								<SLink
									to="featured"
									spy={true}
									smooth={true}
									offset={-navHeight}
									className={styles.navLink}
									activeClass={styles.navLinkActive}>
									Featured
								</SLink>
							</li>
							<li>
								<SLink
									to="chef"
									spy={true}
									smooth={true}
									offset={-navHeight}
									className={styles.navLink}
									activeClass={styles.navLinkActive}>
									The Chef
								</SLink>
							</li>
						</ul>
					</span>

					<div
						id="burgerMenu"
						className={`${styles.burgerMenu} ${
							burgerActive && styles.burgerMenuActive
						}`}
						onClick={() => {
							setNavBg(!navBg);
							setBurgerActive(!burgerActive);
						}}>
						<div className={styles.line}>
							<Image
								src={chopstick}
								width={80}
								height="auto"
								priority={true}
								alt="ChopStick"
							/>
						</div>
						<div className={styles.line}>
							<Image
								src={chopstick}
								width={80}
								height="auto"
								priority={true}
								alt="ChopStick"
							/>
						</div>
						<div className={styles.line}>
							<Image
								src={chopstick}
								width={80}
								height="auto"
								priority={true}
								alt="ChopStick"
							/>
						</div>
					</div>
				</div>
			</nav>
			<div
				className={`${styles.mobileNav} ${
					burgerActive && styles.mobileNavActive
				}`}>
				<ul className={styles.mobileNavLinks}>
					<li>
						<SLink
							to="hero"
							spy={true}
							smooth={true}
							// isDynamic={true}
							offset={-navHeight}
							onClick={closeNav}
							// onSetActive={closeNav}
							className={styles.mobileNavLink}
							activeClass={styles.mobileNavLinkActive}>
							Home
						</SLink>
					</li>
					<li>
						<SLink
							to="about"
							spy={true}
							smooth={true}
							// isDynamic={true}
							offset={-navHeight}
							onClick={closeNav}
							// onSetActive={closeNav}
							className={styles.mobileNavLink}
							activeClass={styles.mobileNavLinkActive}>
							About
						</SLink>
					</li>
					<li>
						<SLink
							to="bowl"
							spy={true}
							smooth={true}
							// isDynamic={true}
							offset={-navHeight}
							onClick={closeNav}
							// onSetActive={closeNav}
							className={styles.mobileNavLink}
							activeClass={styles.mobileNavLinkActive}>
							Bowl
						</SLink>
					</li>
					<li>
						<SLink
							to="menu"
							spy={true}
							smooth={true}
							// isDynamic={true}
							offset={-navHeight}
							onClick={closeNav}
							// onSetActive={closeNav}
							className={styles.mobileNavLink}
							activeClass={styles.mobileNavLinkActive}>
							Menu
						</SLink>
					</li>
					<li>
						<SLink
							to="featured"
							spy={true}
							smooth={true}
							// isDynamic={true}
							offset={-navHeight}
							onClick={closeNav}
							// onSetActive={closeNav}
							className={styles.mobileNavLink}
							activeClass={styles.mobileNavLinkActive}>
							Featured
						</SLink>
					</li>
					<li>
						<SLink
							to="chef"
							spy={true}
							smooth={true}
							// isDynamic={true}
							offset={-navHeight}
							onClick={closeNav}
							// onSetActive={closeNav}
							className={styles.mobileNavLink}
							activeClass={styles.mobileNavLinkActive}>
							The Chef
						</SLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Nav;
