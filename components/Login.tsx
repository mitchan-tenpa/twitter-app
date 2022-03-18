import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../src/firebase'

const Login = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
  }
  return (
    <div>
      <button onClick={loginWithGoogle}>Sign in Google</button>
    </div>
  )
}

export default Login;