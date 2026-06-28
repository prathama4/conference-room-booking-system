import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatisticsCard from "../components/StatisticsCard";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-4 gap-5">

            <StatisticsCard
              title="Total Users"
              value="120"
              color="text-blue-600"
            />

            <StatisticsCard
              title="Today's Bookings"
              value="38"
              color="text-green-600"
            />

            <StatisticsCard
              title="Cancelled"
              value="5"
              color="text-red-600"
            />

            <StatisticsCard
              title="Available Rooms"
              value="12"
              color="text-purple-600"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;