import axios from "axios";

const API = "http://localhost:4000/api";

export const getNotifications = async () => {
  return await axios.get(`${API}/notifications`);
};

export const markAsRead = async (id) => {
  return await axios.put(`${API}/notifications/${id}`);
};