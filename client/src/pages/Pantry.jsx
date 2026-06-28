import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Pantry() {

  const items = [
    "Tea",
    "Coffee",
    "Snacks",
    "Lunch",
    "Water",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Pantry Request
          </h1>

          <div className="grid grid-cols-2 gap-5">

            {items.map((item) => (

              <div
                key={item}
                className="bg-white shadow rounded-xl p-5"
              >

                <h2 className="font-bold text-xl">
                  {item}
                </h2>

                <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded">
                  Request
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Pantry;