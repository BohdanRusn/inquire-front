import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

const axiosInstance = axios.create({
  baseURL: `${baseUrl}/`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      throw new Error(error.data.message);
  }
);

export default axiosInstance;
