import axios from "axios";

const API = "http://localhost:4000/api";

export const askBot = async (message) => {
  return await axios.post(`${API}/chatbot`, {
    message,
  });
};

export const getChatHistory = async () => {
  return await axios.get(`${API}/chat-history`);
};