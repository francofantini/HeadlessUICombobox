import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Combobox } from '@headlessui/react';
import { useState, useCallback } from 'react'

const Home: NextPage = () => {

  const [isMultiple, setIsMultiple] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState()

  const onChange = useCallback((e: any) => {
    console.log(e)
    setSelectedOption(e)
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Combobox value={selectedOption} onChange={onChange} multiple={isMultiple}>
          {({ open, activeIndex }) => {
            return (
              <div>test</div>
            );
          }}
        </Combobox>
      </main>
    </div>
  )
}

export default Home
