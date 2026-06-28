import { useState } from "react";

function BookingPopup({
  isOpen,
  onClose,
  onBook,
  room,
  time,
}) {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [attendees, setAttendees] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");

  const [pantry, setPantry] = useState(false);
  const [stationery, setStationery] = useState(false);
  const [recording, setRecording] = useState(false);
  const [translation, setTranslation] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    const bookingData = {
      room,
      time,
      meetingTitle,
      organizer,
      attendees,
      purpose,
      date,
      pantry,
      stationery,
      recording,
      translation,
    };

    console.log("Booking Details:", bookingData);

    onBook();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[550px] p-8">

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Book Conference Room
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">

          <p>
            <strong>Room :</strong> {room}
          </p>

          <p className="mt-2">
            <strong>Time :</strong> {time}
          </p>

        </div>

        <input
          type="text"
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="text"
          placeholder="Organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="text"
          placeholder="Attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          placeholder="Purpose of Meeting"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg p-3 mb-5"
        />

        <div className="space-y-3 mb-6">

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={pantry}
              onChange={() => setPantry(!pantry)}
            />
            Need Pantry
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={stationery}
              onChange={() => setStationery(!stationery)}
            />
            Need Stationery
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={recording}
              onChange={() => setRecording(!recording)}
            />
            Enable Recording
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={translation}
              onChange={() => setTranslation(!translation)}
            />
            Need Translation
          </label>

        </div>

        <div className="flex justify-end gap-4">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg bg-gray-400 text-white hover:bg-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingPopup;