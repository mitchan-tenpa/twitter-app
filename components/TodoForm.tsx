import { serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'

const TodoForm = () => {
  const [todo, setTodo] = useState({title:"", detail:""});
  const onSubmit = async () => {
    if (todo?.hasOwnProperty("timestamp")) {
    
      const todoUpdated = {...todo, timestamp: serverTimestamp()}
      setTodo({title:"", detail:""});
    } else {
      setTodo({title:"", detail:""})
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