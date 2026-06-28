import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

function ChatWindow() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I am your Conference Room Assistant. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply = {
      sender: "bot",
      text: "Sorry, I don't understand yet.",
    };

    const msg = input.toLowerCase();

    if (msg.includes("book")) {
      botReply.text =
        "You can book a conference room from the Vacancy Matrix.";
    }

    if (msg.includes("available")) {
      botReply.text =
        "Conference Room A is available at 2 PM.";
    }

    if (msg.includes("pantry")) {
      botReply.text =
        "Pantry service can be requested while booking.";
    }

    if (msg.includes("stationery")) {
      botReply.text =
        "Stationery can be requested during booking.";
    }

    if (msg.includes("meeting")) {
      botReply.text =
        "Today's meetings are available in the Calendar section.";
    }

    setMessages([...messages, userMessage, botReply]);

    setInput("");
  };

  return (

    <div className="bg-white rounded-xl shadow-lg">

      <div className="bg-blue-700 text-white p-4 rounded-t-xl flex items-center gap-3">

        <FaRobot />

        <h2 className="font-bold">
          AI Assistant
        </h2>

      </div>

      <div className="h-[450px] overflow-y-auto p-5 space-y-4">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`max-w-[70%] p-3 rounded-xl ${
              message.sender === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {message.text}
          </div>

        ))}

      </div>

      <div className="border-t p-4 flex gap-3">

        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg p-3"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-700 text-white px-5 rounded-lg"
        >
          <FaPaperPlane />
        </button>

      </div>

    </div>

  );
}

export default ChatWindow;