import React, { useState } from 'react'
import { auth, provider } from '../src/firebase';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const signInGoogle = async () => {
    await auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  const signInEmail = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  };
  const signUpEmail = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex justify-center items-center py-12 px-4 min-h-full sm:px-6 lg:px-8">
      <div className="space-y-8 max-w-md w-full">
        <div>
          <img className="mx-auto w-50 h-50" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            {isLogin ? "Login" : "Register"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true"/>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="block relative focus:z-10 py-2 px-3 w-100% text-gray-900 placeholder:text-gray-500 rounded-none rounded-t-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 appearance-none sm:text-sm w-full" placeholder="Email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="block relative focus:z-10 py-2 px-3 w-100% text-gray-900 placeholder:text-gray-500 rounded-none rounded-b-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 appearance-none sm:text-sm w-full" placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create new account ?" : "Back to login"}
              </span>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button
              className="group flex relative justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full"
              onClick={
                isLogin
                  ? async () => {
                      try {
                        await signInEmail();
                      } catch (err:any) {
                        alert(err.message);
                      }
                    }
                  : async () => {
                      try {
                        await signUpEmail();
                      } catch (err:any) {
                        alert(err.message);
                      }
                    }
              }
            >
              <span className="flex absolute inset-y-0 left-0 items-center pl-3">
                <svg className="text-indigo-500 group-hover:text-indigo-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              {isLogin ? "Login" : "Register"}
            </button>
            <button 
              className="group flex relative justify-center py-2 px-4 mt-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full"
              onClick={signInGoogle}
            >
              <span className="flex absolute inset-y-0 left-0 items-center pl-3">
                <svg className="text-indigo-500 group-hover:text-indigo-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              SignIn with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth;