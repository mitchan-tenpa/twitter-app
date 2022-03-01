import type { NextPage } from 'next'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { login, logout, selectUser } from '../features/userSlice';

const Home: NextPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
      <>
        <TodoForm />
        <TodoList />
      </>
  )
}

export default Home
