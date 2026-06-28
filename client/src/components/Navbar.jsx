import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome to Conference Room Booking System
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">

          <FaSearch className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <div className="flex items-center gap-2">

          <FaUserCircle
            className="text-blue-700"
            size={35}
          />

          <div>
            <p className="font-semibold">
              Prathama
            </p>

            <p className="text-sm text-gray-500">
              Employee
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;