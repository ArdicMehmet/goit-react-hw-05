import axios from "axios";
const themoviedbBaseURL = "https://api.themoviedb.org/3";
const axiosInstance = axios.create({
  baseURL: themoviedbBaseURL,
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzk1MjE5MzAwOTRlYzE0ZGUyMWFkMWNlYzcxMTNiMSIsIm5iZiI6MTczMjc3OTgyOC4yMzgyNzk4LCJzdWIiOiI2NzQ4MWU3MmNhYjBhMjM4ZGRkY2U3OTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5kRiolMtwp_d9MbzVFDZY-vw64H2qNQh1b2P1tPxoGA",
    "Content-Type": "application/json",
  },
});

export  {axiosInstance};