import axios from "axios";

const API_URL = "http://localhost:3000/api/cars";

// Get all cars
export const getCars = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Get car by id
export const getCarById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

// Create new car
export const createCar = async (carData) => {
  const response = await axios.post(API_URL, carData);

  return response.data;
};

// Update car
export const updateCar = async (id, carData) => {
  const response = await axios.put(`${API_URL}/${id}`, carData);

  return response.data;
};

// Delete car
export const deleteCar = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};
