import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../components/Auth';
import { login, logout, selectUser } from '../features/userSlice';
import { auth } from '../src/firebase';

const Home: NextPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);

  return (
    <>
      <Auth />
      {/* {user.uid ? (
        <Link href="/TwitterPage">TwitterPageへ</Link>
      ): (
        <Link href="/TwitterPage">TwitterPageへ</Link>
      )} */}

      {/* <div className="text-red-500">test</div>
      <div>
        <Link href="/TwitterPage">TwitterPageへ</Link>
      </div>
      <div>
        <Link href="/PopOver">PopOverへ</Link>
      </div> */}
    </>

  )
}

export default Home
