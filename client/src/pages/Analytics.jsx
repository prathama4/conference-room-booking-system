import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatisticsCard from "../components/StatisticsCard";

function Analytics() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Analytics
          </h1>

          <div className="grid grid-cols-4 gap-5">

            <StatisticsCard
              title="Bookings"
              value="320"
              color="text-blue-600"
            />

            <StatisticsCard
              title="Users"
              value="150"
              color="text-green-600"
            />

            <StatisticsCard
              title="Meetings"
              value="540"
              color="text-purple-600"
            />

            <StatisticsCard
              title="Cancelled"
              value="18"
              color="text-red-600"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;