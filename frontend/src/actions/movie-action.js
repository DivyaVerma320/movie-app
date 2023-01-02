import { popularMoviesAction } from "../slices/popularMovieSlice";
import tmbdApi from "../api/tmbdApi";

export const fetchPopularMovies = (category, params) => {
  return async (dispatch) => {
    try {
      const response = await tmbdApi.getMoviesList(category, { params });
      dispatch(
        popularMoviesAction.fetchPopularMovies({
          movies: response.data.results.slice(1, 7),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
