import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieID: null,
  fillterUser: [],
};

export const adminSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getMovieID: (state, action) => {
      state.movieID = action.payload;
    },
    getTypeUser: (state, action) => {
      state.fillterUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMovieID, getTypeUser } = adminSlice.actions;

export default adminSlice.reducer;
