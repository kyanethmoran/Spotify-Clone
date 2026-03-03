import axios from "axios";

export const axiosInstance = axios.create({
  // url to our backend
  baseURL: "http://localhost:5000/api",
});
