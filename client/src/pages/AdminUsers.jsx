import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminUsers() {

  const users = [
    {
      id: 1,
      name: "Prathama Biswas",
      department: "IT",
      location: "Kolkata",
    },
    {
      id: 2,
      name: "Rahul Roy",
      department: "HR",
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Sneha Das",
      department: "Finance",
      location: "Hyderabad",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Manage Users
          </h1>

          <table className="w-full bg-white rounded-xl shadow">

            <thead className="bg-blue-700 text-white">

              <tr>

                <th className="p-4">Name</th>
                <th>Department</th>
                <th>Location</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="text-center border-b"
                >

                  <td className="p-4">{user.name}</td>

                  <td>{user.department}</td>

                  <td>{user.location}</td>

                  <td>

                    <button className="bg-red-600 text-white px-4 py-2 rounded">
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminUsers;