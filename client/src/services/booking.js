import axios from "axios";

const API = "http://localhost:4000/api";

export const getBookings = async () => {
  return await axios.get(`${API}/bookings`);
};

export const createBooking = async (booking) => {
  return await axios.post(`${API}/bookings`, booking);
};

export const cancelBooking = async (id) => {
  return await axios.delete(`${API}/bookings/${id}`);
};

export const getRoomAvailability = async () => {
  return await axios.get(`${API}/rooms`);
};