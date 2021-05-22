import { useState } from 'react';
import Spinner from '../components/Spinner';

export default function Login() {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleUserInputChange = event => {
    setUserInput(event.target.value);
  };

  const handlePasswordChange = event => {
    setPasswordInput(event.target.value);
  };

  const onSubmit = formEvent => {
    formEvent.preventDefault();

    setIsLoading(true);
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userInput,
        password: passwordInput,
      }),
    })
      .then(res => res.json())
      .then(data => {
        const { access_token: accessToken } = data;
        localStorage.setItem('token', accessToken);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setIsError(e);
      });
  };

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="bg-white p-6 flex flex-col items-center rounded-lg">
        <h1 className="mb-5 text-gray-600 text-2xl">Instagram!</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <input
            className="block border border-gray-400 mb-2 bg-gray-100 text-gray-500 placeholder-gray-300 p-1 rounded-sm"
            placeholder="Usuario"
            type="text"
            name="user"
            value={userInput}
            onChange={handleUserInputChange}
          />
          <input
            className="block border border-gray-400 mb-4 bg-gray-100 text-gray-500 placeholder-gray-300 p-1 rounded-sm"
            placeholder="Contraseña"
            type="password"
            name="password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <button
            disabled={isLoading}
            className="flex flex-row justify-center items-center text-center bg-gradient-to-b from-blue-400 to-blue-500 text-white border border-blue-500 py-1 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading && <Spinner />}
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
