import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaHistory,
  FaRobot,
  FaClipboardList,
  FaUtensils,
  FaPen,
  FaCog,
  FaBell,
  FaUser,
  FaUsers,
  FaChartBar,
  FaComments,
  FaWifi,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white shadow-lg">

      <div className="p-6 border-b border-blue-700">
        <h2 className="text-2xl font-bold">
          Conference Room
        </h2>
      </div>

      <ul className="mt-6 space-y-2">

        <Link to="/dashboard">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaTachometerAlt />
            Dashboard
          </li>
        </Link>

        <Link to="/calendar">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaCalendarAlt />
            Calendar
          </li>
        </Link>

        <Link to="/booking-history">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaHistory />
            Booking History
          </li>
        </Link>

        <Link to="/dashboard">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaClipboardList />
            Vacancy Matrix
          </li>
        </Link>

        <Link to="/pantry">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaUtensils />
            Pantry
          </li>
        </Link>

        <Link to="/stationery">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaPen />
            Stationery
          </li>
        </Link>

        <Link to="/guest-network">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaWifi />
            Guest Network
          </li>
        </Link>

        <Link to="/notifications">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaBell />
            Notifications
          </li>
        </Link>

        <Link to="/profile">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaUser />
            Profile
          </li>
        </Link>

        <Link to="/chatbot">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaRobot />
            AI Assistant
          </li>
        </Link>

        <Link to="/admin">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaCog />
            Admin Dashboard
          </li>
        </Link>

        <Link to="/admin/users">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaUsers />
            Manage Users
          </li>
        </Link>

        <Link to="/admin/bookings">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaClipboardList />
            Manage Bookings
          </li>
        </Link>

        <Link to="/admin/chats">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaComments />
            Chat History
          </li>
        </Link>

        <Link to="/analytics">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
            <FaChartBar />
            Analytics
          </li>
        </Link>

        <Link to="/login">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-red-600 cursor-pointer mt-8">
            <FaSignOutAlt />
            Logout
          </li>
        </Link>

      </ul>

    </div>
  );
}

export default Sidebar;