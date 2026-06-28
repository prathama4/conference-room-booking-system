import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import VacancyMatrix from "../components/VacancyMatrix";
import NotificationBell from "../components/NotificationBell";
import Chatbot from "../components/Chatbot";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Conference Room Dashboard
            </h1>

            <NotificationBell />
          </div>

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

          <div className="mt-8">
            <VacancyMatrix />
          </div>

        </div>

        <Chatbot />

      </div>
    </div>
  );
}

export default Dashboard;