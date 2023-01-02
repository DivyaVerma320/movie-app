import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  genresArr: [],
  loading: false,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    fetchGenresArr: (state, action) => {
      state.genresArr = action.payload.genres;
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
    },
  },
});

export const genresAction = genresSlice.actions;
export default genresSlice;
