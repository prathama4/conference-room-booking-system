import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Feedback() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Feedback
          </h1>

          <textarea
            className="w-full h-60 border rounded-lg p-5"
            placeholder="Write your feedback..."
          ></textarea>

          <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded">
            Submit Feedback
          </button>

        </div>

      </div>

    </div>

  );
}

export default Feedback;