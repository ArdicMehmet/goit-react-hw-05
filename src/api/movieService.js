import {axiosInstance} from "./axiosInstance";
export const getTrendingMovies = async () => {
    try {
      const response = await axiosInstance.get("/posts");
      return response.data; 
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }
};