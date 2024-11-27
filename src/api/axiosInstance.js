import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Base URL
  headers: {
    Authorization: "Bearer f31a666729300ca2df31acfcf11eb7f6",
    "Content-Type": "application/json",
  },
});

export  {axiosInstance};