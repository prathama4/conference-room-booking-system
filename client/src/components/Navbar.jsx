import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaMoon,
} from "react-icons/fa";

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      {/* Left Side */}

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Conference Room Booking System
        </h2>

        <p className="text-gray-500">
          Welcome back, Prathama 👋
        </p>

      </div>

      {/* Center */}

      <div className="relative">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="pl-12 pr-5 py-3 border rounded-xl w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <div className="text-gray-600 font-medium">
          {today}
        </div>

        <button className="text-2xl hover:text-blue-700">
          <FaMoon />
        </button>

        <button className="relative text-2xl hover:text-blue-700">

          <FaBell />

          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            4
          </span>

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-700" />

          <div>

            <p className="font-bold">
              Prathama
            </p>

            <p className="text-sm text-gray-500">
              Software Intern
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;