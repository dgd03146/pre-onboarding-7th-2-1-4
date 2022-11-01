import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const carApis = {
  getCars: (fuelType: string, seg: string) =>
    api.get(`/api/cars?fuelType=${fuelType}&segement=${seg}`)
};
