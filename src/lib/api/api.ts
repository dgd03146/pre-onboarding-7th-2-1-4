import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const carApi = {
  getAllCars: () => api.get("/api/cars"),
  getCars: (seg: string, fuelType: string) =>
    api.get(`/api/cars?fuelType=${fuelType}&segment=${seg}`)
};
