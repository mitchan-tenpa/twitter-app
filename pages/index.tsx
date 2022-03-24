import type { NextPage } from 'next'
import Link from 'next/link';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useAuth } from '../src/Auth';
import { auth } from '../src/firebase'

const Home: NextPage = () => {
  const {currentUser} = useAuth();
  return (
      <>
        <button onClick={()=> auth.signOut()}>アイコン</button>
        <div>
          {currentUser.displayName}
        </div>
        <TodoForm />
        <TodoList />
        <Link href="/TwitterPage">TwitterPage</Link>
        <Link href="/BlogPage">BlogPage</Link>
      </>
  )
}

export default Home;
