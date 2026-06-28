import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            My Profile
          </h1>

          <div className="bg-white rounded-xl shadow-md p-8">

            <div className="flex items-center gap-6 mb-8">

              <FaUserCircle
                size={90}
                className="text-blue-700"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  Prathama Biswas
                </h2>

                <p className="text-gray-500">
                  Software Intern
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="font-semibold">
                  Employee ID
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value="EMP1001"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">
                  Department
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value="IT"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">
                  Email
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value="prathama@company.com"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">
                  Default Location
                </label>

                <input
                  className="w-full border rounded-lg p-3 mt-2"
                  value="Kolkata Office"
                  readOnly
                />
              </div>

            </div>

            <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg">
              Edit Profile
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;