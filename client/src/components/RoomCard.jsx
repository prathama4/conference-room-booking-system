import { FaUsers, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function RoomCard({ room, capacity, status }) {
  const available = status === "Available";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <h2 className="text-xl font-bold text-blue-800 mb-4">
        {room}
      </h2>

      <div className="flex items-center gap-2 mb-3">
        <FaUsers className="text-gray-600" />
        <span>Capacity : {capacity}</span>
      </div>

      <div className="flex items-center gap-2 mb-5">

        {available ? (
          <>
            <FaCheckCircle className="text-green-600" />
            <span className="text-green-600 font-semibold">
              Available
            </span>
          </>
        ) : (
          <>
            <FaTimesCircle className="text-red-600" />
            <span className="text-red-600 font-semibold">
              Booked
            </span>
          </>
        )}

      </div>

      <button
        className={`w-full py-3 rounded-lg text-white font-semibold ${
          available
            ? "bg-blue-700 hover:bg-blue-800"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!available}
      >
        {available ? "Book Now" : "Unavailable"}
      </button>

    </div>
  );
}

export default RoomCard;