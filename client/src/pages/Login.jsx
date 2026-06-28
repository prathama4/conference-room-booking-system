function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Conference Room Booking
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Sign in to continue
        </p>

        <input
          type="email"
          placeholder="Employee Email"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;