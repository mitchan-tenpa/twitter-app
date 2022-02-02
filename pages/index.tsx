import type { NextPage } from 'next'
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
