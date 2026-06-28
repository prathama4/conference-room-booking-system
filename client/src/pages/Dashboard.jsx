import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatisticsCard from "../components/StatisticsCard";
import RoomCard from "../components/RoomCard";
import VacancyMatrix from "../components/VacancyMatrix";
import NotificationBell from "../components/NotificationBell";
import Chatbot from "../components/Chatbot";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <NotificationBell />
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

            <StatisticsCard
              title="Total Rooms"
              value="12"
              color="text-blue-700"
            />

            <StatisticsCard
              title="Available"
              value="8"
              color="text-green-600"
            />

            <StatisticsCard
              title="Booked"
              value="4"
              color="text-red-600"
            />

            <StatisticsCard
              title="Today's Meetings"
              value="15"
              color="text-purple-600"
            />

          </div>

          {/* Rooms */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <RoomCard
              room="Conference Room A"
              capacity="10"
              status="Available"
            />

            <RoomCard
              room="Conference Room B"
              capacity="20"
              status="Booked"
            />

            <RoomCard
              room="Conference Room C"
              capacity="8"
              status="Available"
            />

          </div>

          <div className="mt-10">

            <VacancyMatrix />

          </div>

        </div>

        <Chatbot />

      </div>

    </div>
  );
}

export default Dashboard;