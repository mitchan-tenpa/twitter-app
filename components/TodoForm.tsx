import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useAuth } from '../src/Auth';
import { db } from '../src/firebase';

const TodoForm = () => {
  const [todo, setTodo] = useState({title:"", detail:""});
  const {currentUser} = useAuth();
  const onSubmit = async () => {
    if (todo?.hasOwnProperty("timestamp")) {
      const docRef = doc(db, "todos");
      const todoUpdated = {...todo, timestamp: serverTimestamp()}
      updateDoc(docRef, todoUpdated);
      setTodo({title:"", detail:""});
      alert(`Todo with id ${docRef.id} is added successfully`)
    } else {
      const collectionRef = collection(db, "todos")
      const docRef = await addDoc(collectionRef, {
        ...todo,email: currentUser.email, timestamp:serverTimestamp()
      })
      setTodo({title:"", detail:""})
      alert(`Todo with id ${docRef.id} is added successfully`)
    }

  };

  return (
    <div className='flex flex-col p-4 m-auto w-50%'>
      <pre>{JSON.stringify(todo)}</pre>
      <div>
        <input 
          value={todo.title} 
          type="text" 
          placeholder='title' 
          className='m-3'
          onChange={(e) => setTodo({...todo, title:e.target.value})}
        />
      </div>
      <div>
        <input 
          value={todo.detail} 
          type="text" 
          placeholder='detail' 
          className='m-3'
          onChange={(e) => setTodo({...todo, detail:e.target.value})}
        />
      </div>
      <button 
        onClick={onSubmit} 
        className='w-50% text-white bg-slate-400 rounded-md border-2'
      >
        Add a new todo
      </button>
    </div>
  )
}

export default TodoForm;