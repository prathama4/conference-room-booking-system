import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Calendar() {
  const meetings = [
    {
      room: "Conference Room A",
      title: "Project Discussion",
      time: "10:00 AM",
    },
    {
      room: "Conference Room B",
      title: "Client Meeting",
      time: "1:00 PM",
    },
    {
      room: "Conference Room C",
      title: "HR Interview",
      time: "3:00 PM",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Meeting Calendar
          </h1>

          <div className="grid grid-cols-7 gap-4 mb-8">

            {[
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun",
            ].map((day) => (
              <div
                key={day}
                className="bg-blue-700 text-white rounded-lg p-4 text-center font-semibold"
              >
                {day}
              </div>
            ))}

          </div>

          <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">
              Today's Meetings
            </h2>

            {meetings.map((meeting, index) => (

              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >

                <div>

                  <h3 className="font-bold">
                    {meeting.title}
                  </h3>

                  <p className="text-gray-500">
                    {meeting.room}
                  </p>

                </div>

                <div className="text-blue-700 font-semibold">
                  {meeting.time}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Calendar;