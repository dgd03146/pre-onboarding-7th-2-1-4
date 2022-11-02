import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const carApi = {
  getCars: () => api.get("/api/cars"),
  getCar: (seg: string, fuelType?: string) =>
    api.get(`/api/cars?fuelType=${fuelType}&segement=${seg}`)
};
