export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Welcome to the Car Portal
      </h1>
      <div className="space-y-4">
        <a
          href="/login"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Login Page
        </a>
        <a
          href="/createAccount"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Sign Up
        </a>
        <a
          href="/cars"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Cars
        </a>
        <a
          href="/uploadCar"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Upload Car
        </a>
        <a
          href="/manufacturers"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
					Manufacturers
        </a>
        <a
          href="/addManufacturer"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Add Manufacturers
        </a>
        <a
          href="/profile"
          className="block w-full max-w-xs px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Profile
        </a>
      </div>
    </div>
  );
}
