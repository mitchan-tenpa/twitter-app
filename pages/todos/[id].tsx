import { async } from '@firebase/util';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import React from 'react'
import { db } from '../../src/firebase';

const Detail = ({todoProps}) => {
  const todo = JSON.parse(todoProps)
  return (
    <div className=''>
      <div className='m-auto w-540 border-2 shadow-md'>
        <div className='font-serif font-bold text-blue-600'>
          {todo.title}
        </div>
        <div>
          {todo.detail}
        </div>
        <div>
          <Link href="/">
            <button className='text-red-400'>Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail;

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "todos"));
  const paths = snapshot.docs.map(doc => {
    return {
      params: { id: doc.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);

  return {
    props: { todoProps: JSON.stringify(docSnap.data() || null)}
  };
};