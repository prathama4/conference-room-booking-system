import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminChats() {

  const chats = [
    {
      user: "Prathama",
      message: "Book Conference Room A",
    },
    {
      user: "Rahul",
      message: "Available rooms today?",
    },
    {
      user: "Sneha",
      message: "Need Pantry Service",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Chat History
          </h1>

          {chats.map((chat, index) => (

            <div
              key={index}
              className="bg-white rounded-lg shadow p-5 mb-4"
            >

              <h3 className="font-bold">
                {chat.user}
              </h3>

              <p className="text-gray-600 mt-2">
                {chat.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminChats;