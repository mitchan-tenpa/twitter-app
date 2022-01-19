import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-red-500">test</div>
      <Link href="/TwitterPage">TwitterPageへ</Link>
    </div>

  )
}

export default Home
