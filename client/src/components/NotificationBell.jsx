import { FaBell } from "react-icons/fa";

function NotificationBell() {
  return (
    <button className="relative bg-white p-3 rounded-full shadow hover:bg-gray-100">
      <FaBell className="text-blue-700 text-xl" />

      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        3
      </span>
    </button>
  );
}

export default NotificationBell;