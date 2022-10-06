import Head from "next/head";
import { Liquid } from "../components";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bored As Fuck</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Bored As Fuck By Youssef Rabei" />
      </Head>

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

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://youssefrabei.vercel.app?utm_source=boredAsFuck&utm_medium=default-template&utm_campaign=boredAsFuck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by one stupid bored sleepless
          <span style={{ marginInlineStart: "-55px", marginBlockEnd: "-5px" }}>
            <Liquid text="Youssef Rabei" fontSize="8px" width="250px" />
          </span>
        </a>
      </footer>
    </div>
  );
}
