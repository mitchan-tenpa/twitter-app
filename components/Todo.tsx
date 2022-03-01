import { deleteDoc, doc } from 'firebase/firestore';
import moment from 'moment'
import React from 'react'
import { db } from '../src/firebase';

interface PROPS {
  id: string;
  title: string;
  timestamp: any;
  detail: string;
}

const Todo: React.FC<PROPS> = ({ id, timestamp, title, detail}) => {
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef)
    alert(`Todo with id ${docRef.id} is deleted successfully`)
  }
  return (
    <div className='flex justify-center '>
      <div className='flex flex-col m-3'>
        <ul className='text-xl font-bold'>
          {title}
        </ul>
        <ul>
          {moment(timestamp).format("MMMM do, yyyy")}
        </ul>
      </div>
      <button className='bg-blue-300 rounded-lg border-2'>edit</button>
      <button onClick={(e) => deleteTodo(id,e)} className='bg-red-300 rounded-lg border-2'>delete</button>
    </div>
  )
}

export default Todo;