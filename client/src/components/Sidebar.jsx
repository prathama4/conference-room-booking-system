import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaHistory,
  FaRobot,
  FaClipboardList,
  FaUtensils,
  FaPen,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white shadow-lg">

      <div className="p-6 border-b border-blue-700">
        <h2 className="text-2xl font-bold">
          Conference Room
        </h2>
      </div>

      <ul className="mt-6 space-y-2">

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaTachometerAlt />
          Dashboard
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaCalendarAlt />
          Book Room
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaClipboardList />
          Vacancy Matrix
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaHistory />
          Booking History
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaUtensils />
          Pantry
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaPen />
          Stationery
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaRobot />
          AI Assistant
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-blue-800 cursor-pointer">
          <FaCog />
          Settings
        </li>

        <li className="flex items-center gap-3 px-6 py-3 hover:bg-red-600 cursor-pointer mt-8">
          <FaSignOutAlt />
          Logout
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;