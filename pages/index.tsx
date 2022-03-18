import type { NextPage } from 'next'
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
      </>
  )
}

export default Home;
