import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieID: null,
};

export const adminSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getMovieID: (state, action) => {
      state.movieID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMovieID } = adminSlice.actions;

export default adminSlice.reducer;
