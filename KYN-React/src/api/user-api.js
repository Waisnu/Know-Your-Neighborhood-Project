import axios from "axios";
import { BASE_URL } from "./constant";

// LOGIN (LOCAL)
export const loginAPI = async (email, password) => {
  return await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
};
 
// REGISTER
export const registerAPI = async (user) => {
  return await axios.post(`${BASE_URL}/auth/register`, {
    name: user.name,
    email: user.email,
    password: user.password,
    address: user.address,
    phoneNumber: user.phoneNumber,
  });
};

// GET PROFILE
export const getUserLoginAPI = async (token) => {
  return await axios.get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// EDIT PROFILE
export const editProfileAPI = async (user, token) => {
  return await axios.put(
    `${BASE_URL}/users/edit`,
    {
      userId: user.userId,
      name: user.name,
      address: user.address,
      phoneNumber: user.phoneNumber,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// LIST USER
export const getListUserAPI = async (token) => {
  return await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET USER BY ID
export const getUserAPI = async (userId, token) => {
  return await axios.get(`${BASE_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
