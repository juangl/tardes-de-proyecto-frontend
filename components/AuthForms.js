import { useState } from 'react';

import LoginForm from './LoginForm';

const ZERO_WIDTH_SPACE = '​';
export default function AuthForms() {
  const [error, setError] = useState(null);

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="bg-white p-6 flex flex-col items-center rounded-lg w-1/2">
        <h1 className="mb-5 text-gray-600 text-2xl">Instagram!</h1>
        <LoginForm />
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
