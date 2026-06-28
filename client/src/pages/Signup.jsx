import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white w-[480px] rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Conference Room Booking
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Create your account
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Employee ID"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Company Email"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Department"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Default Location"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;