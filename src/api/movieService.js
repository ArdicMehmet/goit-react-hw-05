import {axiosInstance} from "./axiosInstance";
export const baseImageURL = "https://image.tmdb.org/t/p/original";
export const getTrendingMovies = async () => {
  const trendingURL = "/trending/movie/day?language=en-US"
    try {
      const response = await axiosInstance.get(trendingURL);
      return response.data; 
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }
};

export const getMoviesById = async (movie_id) => {
  const trendingURL = `/movie/${movie_id}?language=en-US`
    try {
      const response = await axiosInstance.get(trendingURL);
      return response.data; 
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }
};

export const getCreditsById = async (movie_id) => {
  const creditsURL = `/movie/${movie_id}/credits?language=en-US`
    try {
      const response = await axiosInstance.get(creditsURL);
      return response.data; 
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }
};

export const getReviewsById = async (movie_id) => {
  const creditsURL = `/movie/${movie_id}/reviews?language=en-US&page=1`
  
    try {
      const response = await axiosInstance.get(creditsURL);
      return response.data ? response.data : []; 
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }
};

export const getSearchByText = async (text) => {
  const creditsURL = `/search/movie?query=${text}&include_adult=false&language=en-US&page=1`
    try {
      const response = await axiosInstance.get(creditsURL);
      return response.data ? response.data : []; 
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }
};
