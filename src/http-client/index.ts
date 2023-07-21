import axios, { AxiosError } from 'axios';
import { API_CONFIG } from "../configs";

const httpClient = axios.create( {
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'apollo-require-preflight': true,
  },
} );

httpClient.interceptors.request.use(
  ( config ) => {
    const configCopy = { ...config };
    
    const token = window.localStorage.getItem("token") as string;
    
    if ( token ) {
      configCopy.headers.Authorization = `Bearer ${ token }`;
    }
    
    configCopy.headers.Accept = '*/*';
    configCopy.headers['Access-Control-Allow-Credentials'] = true;
    configCopy.headers['Access-Control-Allow-Origin'] = '*/*';
    configCopy.headers['Content-Type'] = configCopy.headers['Content-Type'] || 'application/json';
    
    return configCopy;
  },
  ( error ) => {
    Promise.reject( error );
  },
);

httpClient.interceptors.response.use(
  ( response ) => response,
  ( error ) => {
    const isAxiosError = error instanceof AxiosError;
    
    if ( !isAxiosError ) Promise.reject( error );
    
    const axiosError = error as AxiosError;
    
    if ( axiosError.response?.status === 401 ) {
      // store.dispatch(authThunks.logout());
    }
  },
);

export default httpClient;
