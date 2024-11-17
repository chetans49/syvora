import axios from 'axios';

const API_URL = 'http://localhost:8081/api/api/items'; // Correct URL

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getItem = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error.message);
    throw error; // Re-throw the error for further handling
  }
};

export const createItem = async (item) => {
  await axios.post(API_URL, item);
};

export const updateItem = async (id, item) => {
  await axios.put(`${API_URL}/${id}`, item);
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
