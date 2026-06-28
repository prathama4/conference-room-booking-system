import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminBookings() {
  const bookings = [
    {
      id: 1,
      user: "Prathama",
      room: "Conference Room A",
      date: "29 Jun",
      time: "10:00 AM",
    },
    {
      id: 2,
      user: "Rahul",
      room: "Conference Room B",
      date: "29 Jun",
      time: "11:30 AM",
    },
    {
      id: 3,
      user: "Sneha",
      room: "Conference Room C",
      date: "30 Jun",
      time: "2:00 PM",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Manage Bookings
          </h1>

          <table className="w-full bg-white rounded-xl shadow">

            <thead className="bg-blue-700 text-white">

              <tr>
                <th className="p-4">User</th>
                <th>Room</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking.id}
                  className="text-center border-b"
                >

                  <td className="p-4">{booking.user}</td>
                  <td>{booking.room}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>

                  <td>

                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Cancel
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

export default AdminBookings;