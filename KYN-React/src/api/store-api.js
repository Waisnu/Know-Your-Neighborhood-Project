import axios from "axios";
import { BASE_URL } from "./constant";

// LIST STORE
export const getListStoreAPI = (token) => {
  return axios.get(`${BASE_URL}/stores`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllStoresWithoutAuthAPI = () => {
  return axios.get(`${BASE_URL}/stores/all`); // Use the appropriate URL path
};

// STORE DETAIL
export const getStoreAPI = (storeId, token) => {
  return axios.get(`${BASE_URL}/stores/${storeId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ADD STORE
export const addStoreAPI = (store, token) => {
  return axios.post(
    `${BASE_URL}/stores/add`,
    {
      storeName: store.storeName,
      country: store.country,
      city: store.city,
      storeEmail: store.storeEmail,
      phoneNumber: store.phoneNumber,
      description: store.description,
      user: {
        userId: store.userId,
      },
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// EDIT STORE
export const editStoreAPI = (store, token) => {
  return axios.put(
    `${BASE_URL}/stores/edit`,
    {
      storeId: store.storeId,
      storeName: store.storeName,
      country: store.country,
      city: store.city,
      storeEmail: store.storeEmail,
      phoneNumber: store.phoneNumber,
      description: store.description,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// SEARCH STORE
export const searchStoreAPI = (keyword, token) => {
  return axios.get(`${BASE_URL}/stores`, {
    params: { keyword: keyword },
    headers: { Authorization: `Bearer ${token}` },
  });
};

