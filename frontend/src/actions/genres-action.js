import { genresAction } from "../slices/genresSlice";
import tmbdApi from "../api/tmbdApi";

export const fetchGenresArr = (category) => {
  return async (dispatch) => {
    try {
      const response = await tmbdApi.getGenres(category);
      dispatch(
        genresAction.fetchGenresArr({
          genres: response.data.genres,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
