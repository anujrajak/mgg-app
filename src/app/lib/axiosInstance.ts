import axios from "axios";
import { getSession } from "next-auth/react";

const BASE_URL = "http://localhost:3000/";
// const TOKEN = localStorage.getItem("token");

// export default axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     deviceIdentifier: "asdasd",
//     // Authorization: `Bearer ${TOKEN}`,
//   },
// });

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Set your API base URL
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers["Authorization"] = `Bearer ${session?.accessToken}`;
      config.headers["deviceIdentifier"] = "asdasd";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
