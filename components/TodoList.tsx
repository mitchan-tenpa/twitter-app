import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: "",
      title: "",
      detail: "",
      timestamp: null,
    }
  ]);
  return (
    <div>
      {todos.map(todo => <Todo key={todo.id}
        id={todo.id}
        title={todo.title}
        detail={todo.detail}
        timestamp={todo.timestamp}
      />)}
    </div>
  )
}

export default TodoList