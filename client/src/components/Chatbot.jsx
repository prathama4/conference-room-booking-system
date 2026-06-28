import { FaRobot } from "react-icons/fa";

function Chatbot() {
  return (
    <button className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center">
      <FaRobot size={28} />
    </button>
  );
}

export default Chatbot;