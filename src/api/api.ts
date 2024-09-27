import axios from "axios";
export default function () {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
}