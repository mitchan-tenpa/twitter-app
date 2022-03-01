import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../src/firebase';
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

  useEffect(() => {
    const collectionRef = collection(db, "todos")
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubsucribe = onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, title: doc.data().title, detail:doc.data().detail, timestamp: doc.data().
      timestamp?.toDate().getTime() })))
    });
    return unsubsucribe;
  }, []);
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