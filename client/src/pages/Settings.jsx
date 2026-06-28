import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Settings
          </h1>

          <div className="bg-white rounded-xl shadow p-8 space-y-5">

            <input
              className="w-full border rounded-lg p-3"
              placeholder="Change Password"
              type="password"
            />

            <select className="w-full border rounded-lg p-3">
              <option>Light Theme</option>
              <option>Dark Theme</option>
            </select>

            <select className="w-full border rounded-lg p-3">
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
            </select>

            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
              Save Settings
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;