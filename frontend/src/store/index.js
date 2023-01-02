import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "../slices/genresSlice";
import movieListSlice from "../slices/movieListSlice";
import popularMovieSlice from "../slices/popularMovieSlice";
import searchTextSlice from "../slices/searchTextSlice";

const store = configureStore({
  reducer: {
    popularMovie: popularMovieSlice.reducer,
    searchText: searchTextSlice.reducer,
    genres: genresSlice.reducer,
    movieList: movieListSlice.reducer,
  },
});

export default store;
