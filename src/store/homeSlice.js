import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenPopup: false,
  data: null,
  loading: false,
  error: null,
  movieDetail: null,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setOpenPopup: (state, action) => {
      state.isOpenPopup = action.payload;
    },
    getDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});

export const { setOpenPopup, getDetail } = homeSlice.actions;

export default homeSlice.reducer;
