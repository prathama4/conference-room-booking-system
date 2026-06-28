import { useState } from "react";
import BookingPopup from "./BookingPopup";

function VacancyMatrix() {
  const [rooms, setRooms] = useState([
    {
      room: "Conference Room A",
      slots: ["Available", "Available", "Booked", "Available", "Booked"],
    },
    {
      room: "Conference Room B",
      slots: ["Booked", "Available", "Available", "Booked", "Available"],
    },
    {
      room: "Conference Room C",
      slots: ["Available", "Booked", "Available", "Available", "Available"],
    },
  ]);

  const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM"];

  const [popupOpen, setPopupOpen] = useState(false);

  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  const [selectedRoomName, setSelectedRoomName] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSlotClick = (roomIndex, slotIndex) => {
    if (rooms[roomIndex].slots[slotIndex] === "Booked") {
      return;
    }

    setSelectedRoomIndex(roomIndex);
    setSelectedSlotIndex(slotIndex);

    setSelectedRoomName(rooms[roomIndex].room);
    setSelectedTime(timeSlots[slotIndex]);

    setPopupOpen(true);
  };

  const handleBooking = () => {
    const updatedRooms = [...rooms];

    updatedRooms[selectedRoomIndex].slots[selectedSlotIndex] = "Booked";

    setRooms(updatedRooms);

    setPopupOpen(false);

    alert("Conference Room Booked Successfully!");
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Vacancy Matrix
        </h2>

        <table className="w-full border">

          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3">Room</th>

              {timeSlots.map((time) => (
                <th key={time}>{time}</th>
              ))}
            </tr>
          </thead>

          <tbody>

            {rooms.map((room, roomIndex) => (

              <tr key={room.room} className="text-center border">

                <td className="font-semibold p-3">
                  {room.room}
                </td>

                {room.slots.map((slot, slotIndex) => (

                  <td key={slotIndex} className="p-2">

                    <button
                      onClick={() =>
                        handleSlotClick(roomIndex, slotIndex)
                      }
                      className={`px-4 py-2 rounded-lg text-white font-semibold ${
                        slot === "Available"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-red-600 cursor-not-allowed"
                      }`}
                    >
                      {slot}
                    </button>

                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <BookingPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onBook={handleBooking}
        room={selectedRoomName}
        time={selectedTime}
      />
    </>
  );
}

export default VacancyMatrix;