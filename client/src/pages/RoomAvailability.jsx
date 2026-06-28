import MainLayout from "../layouts/MainLayout";
import RoomCard from "../components/RoomCard";

function RoomAvailability() {

  const rooms = [
    {
      room: "Conference Room A",
      capacity: 10,
      status: "Available",
    },
    {
      room: "Conference Room B",
      capacity: 15,
      status: "Booked",
    },
    {
      room: "Conference Room C",
      capacity: 20,
      status: "Available",
    },
    {
      room: "Conference Room D",
      capacity: 8,
      status: "Maintenance",
    },
  ];

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Room Availability
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {rooms.map((room, index) => (

          <RoomCard
            key={index}
            room={room.room}
            capacity={room.capacity}
            status={room.status}
          />

        ))}

      </div>

    </MainLayout>
  );
}

export default RoomAvailability;