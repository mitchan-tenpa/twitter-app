import type { NextPage } from 'next'
import Link from 'next/link';
import Header from '../components/Layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <Link href="/TwitterPage">
          <a className='p-4'>
            TwitterPage
          </a>
        </Link>
        <Link href="/BlogPage">
          <a className='p-4'>
            BlogPage
          </a>
        </Link>
      </div>
    </>
  )
}

export default Home;
