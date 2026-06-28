import axios from "axios";

const API = "http://localhost:4000/api";

export const getCalendarEvents = async () => {
  return await axios.get(`${API}/calendar`);
};

export const addMeeting = async (meeting) => {
  return await axios.post(`${API}/calendar`, meeting);
};