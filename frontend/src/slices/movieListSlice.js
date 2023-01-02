import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  movieListArr: [],
  totalPage: 0,
  loading: false,
};

const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    fetchMovieList: (state, action) => {
      state.movieListArr = action.payload.movies;
      state.totalPage = action.payload.totalPage;
      state.loading = false;
    },
    fetchTvList: (state, action) => {
      state.movieListArr = action.payload.tv;
      state.totalPage = action.payload.totalPage;
      state.loading = false;
    },
    searchMovieTv: (state, action) => {
      state.movieListArr = action.payload.searchResults;
      state.totalPage = action.payload.totalPage;
      state.loading = false;
    },
    loadMore: (state, action) => {
      state.movieListArr = [...state.movieListArr, ...action.payload.newMovies];
      state.loading = false;
    },
    loadMoreTv: (state, action) => {
      state.movieListArr = [
        ...state.movieListArr,
        ...action.payload.newTvShows,
      ];
      state.loading = false;
    },
    loadMoreSearch: (state, action) => {
      state.movieListArr = [
        ...state.movieListArr,
        ...action.payload.newSearchResults,
      ];
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
    },
  },
});

export const movieListAction = movieListSlice.actions;
export default movieListSlice;
