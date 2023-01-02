import axios from "axios";
import apiMovie from "./apiMovie";

const axiosMovies = axios.create({
  baseURL: apiMovie.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    const queryString = new URLSearchParams({
      ...params,
      api_key: apiMovie.apiKey,
    }).toString();
    return queryString;
  },
});
export default axiosMovies;
