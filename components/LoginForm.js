import { useState } from 'react';
import { useRouter } from 'next/router';
import Spinner from './Spinner';

export default function LoginForm() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const onSubmit = (formEvent) => {
    formEvent.preventDefault();

    setIsLoading(true);
    setError(null);
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userInput,
        password: passwordInput,
      }),
    })
      .then(async (res) => {
        if (res.status >= 400) {
          throw await res.json();
        }
        return res.json();
      })
      .then((data) => {
        const { access_token: accessToken } = data;
        localStorage.setItem("token", accessToken);
        setIsLoading(false);
        router.reload();
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
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

      <button
        disabled={isLoading}
        className="flex flex-row justify-center items-center text-center bg-gradient-to-b from-yellow-400 to-yellow-500 text-white border border-yellow-500 py-1 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed mt-3"
      >
        {isLoading && <Spinner />}
        Registrarse
      </button>
    </form>
  );
}
