import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TranscriptViewer from "../components/TranscriptViewer";

function Transcript() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Speech To Text
          </h1>

          <TranscriptViewer />

        </div>

      </div>

    </div>
  );
}

export default Transcript;