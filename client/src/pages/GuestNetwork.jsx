import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function GuestNetwork() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Guest Network
          </h1>

          <div className="bg-white rounded-xl shadow p-8">

            <input
              className="w-full border p-3 rounded mb-4"
              placeholder="Guest Name"
            />

            <input
              className="w-full border p-3 rounded mb-4"
              placeholder="Email"
            />

            <input
              className="w-full border p-3 rounded mb-4"
              placeholder="Phone Number"
            />

            <button className="bg-blue-700 text-white px-6 py-3 rounded">
              Generate Guest WiFi
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default GuestNetwork;