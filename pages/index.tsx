import type { NextPage } from 'next'
import Link from 'next/link';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
  return (
      <>
        <button>アイコン</button>
        <TodoForm />
        <TodoList />
        <Link href="/TwitterPage">TwitterPage</Link>
        <Link href="/BlogPage">BlogPage</Link>
      </>
  )
}

export default Home;
