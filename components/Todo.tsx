import { deleteDoc, doc } from 'firebase/firestore';
import moment from 'moment'
import { useRouter } from 'next/router';
import React from 'react'

interface PROPS {
  id: string;
  title: string;
  timestamp: any;
  detail: string;
}

const Todo: React.FC<PROPS> = ({ id, timestamp, title, detail}) => {
  const router = useRouter();
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
  }
  const seeMore = (id, e) => {
    e.stopPropagation();
    router.push(`/todos/${id}`)
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
      <button onClick={(e) => seeMore(id,e)} className='bg-blue-300 rounded-lg border-2'>・・・</button>
      <button onClick={(e) => deleteTodo(id,e)} className='bg-red-300 rounded-lg border-2'>delete</button>
    </div>
  )
}

export default Todo;