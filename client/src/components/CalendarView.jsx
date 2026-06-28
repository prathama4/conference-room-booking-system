function CalendarView() {

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Calendar
      </h2>

      <div className="grid grid-cols-5 gap-4">

        {days.map((day) => (

          <div
            key={day}
            className="bg-blue-100 rounded-lg p-5 text-center"
          >

            <h3 className="font-bold">
              {day}
            </h3>

            <p className="mt-4 text-green-600">
              Available
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CalendarView;