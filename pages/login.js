export default function Login() {
  return (
    <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="bg-white p-6 flex flex-col items-center rounded-lg">
        <h1 className="mb-5 text-gray-600 text-2xl">Instagram!</h1>
        <form className="flex flex-col">
          <input
            className="block border border-gray-400 mb-2 bg-gray-100 text-gray-500 placeholder-gray-300 p-1 rounded-sm"
            placeholder="Usuario"
            type="text"
            name="user"
          />
          <input
            className="block border border-gray-400 mb-4 bg-gray-100 text-gray-500 placeholder-gray-300 p-1 rounded-sm"
            placeholder="Contraseña"
            type="password"
            name="password"
          />
          <button className="block text-center bg-gradient-to-b from-blue-400 to-blue-500 text-white border border-blue-500 py-1 rounded-sm">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}
