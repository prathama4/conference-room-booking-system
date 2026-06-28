import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  FaBell,
  FaCalendarCheck,
  FaTimesCircle,
  FaEnvelope,
} from "react-icons/fa";

function Notifications() {
  const notifications = [
    {
      id: 1,
      icon: <FaCalendarCheck className="text-green-600 text-2xl" />,
      title: "Booking Confirmed",
      message: "Conference Room A has been booked successfully.",
      time: "5 mins ago",
    },
    {
      id: 2,
      icon: <FaTimesCircle className="text-red-600 text-2xl" />,
      title: "Booking Cancelled",
      message: "Your booking for Conference Room B was cancelled.",
      time: "20 mins ago",
    },
    {
      id: 3,
      icon: <FaEnvelope className="text-blue-600 text-2xl" />,
      title: "Email Sent",
      message: "Meeting invitation sent successfully.",
      time: "1 hour ago",
    },
    {
      id: 4,
      icon: <FaBell className="text-yellow-500 text-2xl" />,
      title: "Meeting Reminder",
      message: "Project Discussion starts in 15 minutes.",
      time: "Today",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Notifications</h1>

          <div className="space-y-4">

            {notifications.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition"
              >
                <div className="flex gap-4 items-center">

                  {item.icon}

                  <div>

                    <h2 className="font-bold text-lg">
                      {item.title}
                    </h2>

                    <p className="text-gray-500">
                      {item.message}
                    </p>

                  </div>

                </div>

                <span className="text-gray-400">
                  {item.time}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Notifications;