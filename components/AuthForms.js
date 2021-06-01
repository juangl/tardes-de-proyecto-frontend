import React, { useState } from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const ZERO_WIDTH_SPACE = '​';
export default function AuthForms() {
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => {
    setIsLogin(isLogin => !isLogin);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="bg-white p-6 flex flex-col items-center rounded-lg w-1/2">
        <div className="w-40">
          <h1 className="mb-5 text-gray-600 text-2xl">Instagram!</h1>
          {isLogin
            ? <LoginForm setError={setError} />
            : <RegisterForm setError={setError} />
          }
          <button
            onClick={toggleIsLogin}
            className="w-full flex justify-center items-center text-center bg-gradient-to-b from-yellow-400 to-yellow-500 text-white border border-yellow-500 py-1 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed mt-3"
          >
            {isLogin ? 'Registrarse' : 'Ya tengo una cuenta'}
          </button>
        </div>
        <div
        className="bg-red-300 text-red-600 border border-red-600 mt-2"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        {error?.message || ZERO_WIDTH_SPACE}
      </div>
      </div>
    </div>
  );
}
