import axiosMovies from "./axiousMovies";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmbdApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosMovies.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosMovies.get(url, params);
  },
  getVideos: (cat, id) => {
    const url = category[cat] + "/" + id + "/videos";
    return axiosMovies.get(url, { params: {} });
  },
  search: (cat, params) => {
    const url = "search/" + category[cat];
    return axiosMovies.get(url, params);
  },
  detail: (cat, id, params) => {
    const url = category[cat] + "/" + id;
    return axiosMovies.get(url, params);
  },
  getActors: (cat, id) => {
    const url = category[cat] + "/" + id + "/credits";
    return axiosMovies.get(url, { params: {} });
  },
  similar: (cat, id) => {
    const url = category[cat] + "/" + id + "/similar";
    return axiosMovies.get(url, { params: {} });
  },
  getGenres: (cat) => {
    const url = "/genre/" + category[cat] + "/list";
    return axiosMovies.get(url, { params: {} });
  },
  getImages: (cate, id) => {
    const url = category[cate] + "/" + id + "/images";
    return axiosMovies.get(url, { params: {} });
  },
};
export default tmbdApi;
