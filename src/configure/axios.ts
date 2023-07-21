import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/auth/authSelectors";

const baseUrl = process.env.REACT_APP_API;

const axiosInstance = axios.create({
  baseURL: `${ baseUrl }/`,
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if ( error.message === "Network Error" ) {
      window.location.replace("/login")
    } else {
      throw new Error(error);
    }
  }
);

axiosInstance.interceptors.request.use((config: any) => {
  // if ( JSON.parse(window.localStorage.getItem(
  //   "user"
  // ) as string) ) window.location.replace("/login")
  config.headers.Authorization = `Bearer ${ JSON.parse(window.localStorage.getItem(
    "token"
  ) as string) }`;

  return config;
});

export default axiosInstance;
