import React, { Children } from 'react'
import { ReactNode } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Navbar from './navbar';

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Randoms</title>
        <meta name="description" content="My Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
      </footer>
    </>
  )
}

export default Layout