import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  text: "",
  loading: false,
};

const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    searchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const searchTextAction = searchTextSlice.actions;
export default searchTextSlice;
