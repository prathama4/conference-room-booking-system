import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";

function ChatbotPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            AI Conference Assistant
          </h1>

          <ChatWindow />

        </div>

      </div>

    </div>
  );
}

export default ChatbotPage;