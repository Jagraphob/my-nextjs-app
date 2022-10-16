import React from 'react'
import { ReactNode } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

type Props = {
  children?: ReactNode
}


const layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Randoms</title>
        <meta name="description" content="My Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Nav Bar</div>
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
      </footer>
    </>
  )
}

export default layout