import { movieListAction } from "../slices/movieListSlice";
import tmbdApi from "../api/tmbdApi";

export const fetchMovieList = (category) => {
  const params = {};
  return async (dispatch) => {
    try {
      const response = await tmbdApi.getMoviesList(category, { params });
      dispatch(
        movieListAction.fetchMovieList({
          movies: response.data.results,
          totalPage: response.data.total_pages,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTvList = (category) => {
  const params = {};
  return async (dispatch) => {
    try {
      const response = await tmbdApi.getTvList(category, { params });
      dispatch(
        movieListAction.fetchTvList({
          tv: response.data.results,
          totalPage: response.data.total_pages,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchMovieTv = (category, params) => {
  return async (dispatch) => {
    try {
      const response = await tmbdApi.search(category, { ...params });
      dispatch(
        movieListAction.searchMovieTv({
          searchResults: response.data.results,
          totalPage: response.data.total_pages,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadMoreMovieList = (category, params) => {
  return async (dispatch) => {
    try {
      const response = await tmbdApi.getMoviesList(category, { ...params });
      dispatch(
        movieListAction.loadMore({
          newMovies: response.data.results,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadMoreTvList = (category, params) => {
  return async (dispatch) => {
    try {
      const response = await tmbdApi.getTvList(category, { ...params });
      dispatch(
        movieListAction.loadMoreTv({
          newTvShows: response.data.results,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadMoreSearchResults = (category, params) => {
  return async (dispatch) => {
    try {
      const response = await tmbdApi.search(category, { ...params });
      dispatch(
        movieListAction.loadMoreSearch({
          newSearchResults: response.data.results,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
