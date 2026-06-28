import axios from "axios";

const API = "http://localhost:4000/api";

export const loginUser = async (data) => {
  return await axios.post(`${API}/login`, data);
};

export const signupUser = async (data) => {
  return await axios.post(`${API}/signup`, data);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  return await axios.get(`${API}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};