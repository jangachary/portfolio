import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import MyFooter from '@components/my-footer'
import MyFooter from '@components/my-footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jangachary Sriramadas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My world!</a>
        </h1>
        <div className={styles.typewriter}>
          <h2>
            Jangachary Sriramadas
        </h2>
        </div>

      </main>

      <MyFooter></MyFooter>
    </div>
  )
}
