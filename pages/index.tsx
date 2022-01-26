import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-red-500">test</div>
      <div>
        <Link href="/TwitterPage">TwitterPageへ</Link>
      </div>
      <div>
        <Link href="/PopOver">PopOverへ</Link>
      </div>
    </div>

  )
}

export default Home
