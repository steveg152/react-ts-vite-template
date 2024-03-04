import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor for instance

instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);
