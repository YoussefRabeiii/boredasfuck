import "./globals.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Nav, Footer } from "@components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Bored As Fuck",
	description: "Bored As Fuck | By Youssef Rabei",

	openGraph: {
		title: "Bored As Fuck",
		description: "Bored As Fuck | By Youssef Rabei",
		type: "website",
		locale: "en_US",
		siteName: "BoredAsFuck",
		authors: ["Youssef Rabei"],
		url: "https://boredasfuck.vercel.app",
		images: [
			{
				url: "https://ms3arx2ryodi8vtt.public.blob.vercel-storage.com/BoredAsFuck/site-esKUzLcbEW1ZSI5wr6jlI2A9spWdy5.png", // Must be an absolute URL
				width: 800,
				height: 600,
				alt: "Bored As Fuck | By Youssef Rabei",
			},
			{
				url: "https://ms3arx2ryodi8vtt.public.blob.vercel-storage.com/BoredAsFuck/site-esKUzLcbEW1ZSI5wr6jlI2A9spWdy5.png", // Must be an absolute URL
				width: 1200,
				height: 630,
				alt: "Bored As Fuck | By Youssef Rabei",
			},
		],
	},

	// twitter: {
	// 	card: "summary_large_image",
	// 	title: "Next.js",
	// 	description: "The React Framework for the Web",
	// 	siteId: "1467726470533754880",
	// 	creator: "@nextjs",
	// 	creatorId: "1467726470533754880",
	// 	images: ["https://nextjs.org/og.png"], // Must be an absolute URL
	// },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* <Nav /> */}

				{children}

				<Analytics />
				<SpeedInsights />

				<Footer />
			</body>
		</html>
	);
}
