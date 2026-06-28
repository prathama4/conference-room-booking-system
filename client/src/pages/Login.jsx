import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white w-[420px] rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Conference Room Booking
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to your account
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

        <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
          Login
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;