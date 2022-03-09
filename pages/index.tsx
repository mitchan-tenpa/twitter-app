import type { NextPage } from 'next'
import Login from '../components/Login';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
  return <Login />
  return (
      <>
        <TodoForm />
        <TodoList />
      </>
  )
}

export default Home
