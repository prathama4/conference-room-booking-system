import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function BookingHistory() {
  const bookings = [
    {
      id: 1,
      room: "Conference Room A",
      date: "29 Jun 2026",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      room: "Conference Room B",
      date: "30 Jun 2026",
      time: "02:00 PM",
      status: "Cancelled",
    },
    {
      id: 3,
      room: "Conference Room C",
      date: "01 Jul 2026",
      time: "11:00 AM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Booking History
          </h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-700 text-white">

                <tr>
                  <th className="p-4">Room</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {bookings.map((booking) => (

                  <tr
                    key={booking.id}
                    className="text-center border-b"
                  >

                    <td className="p-4">
                      {booking.room}
                    </td>

                    <td>{booking.date}</td>

                    <td>{booking.time}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          booking.status === "Confirmed"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {booking.status}
                      </span>

                    </td>

                    <td>

                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
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
    </div>
  );
}

export default BookingHistory;