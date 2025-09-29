import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chair: [],
};

export const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      const chair = action.payload;
      const index = state.chair.findIndex(
        (item) => item.tenGhe === chair.tenGhe
      );
      if (index !== -1) {
        state.chair.splice(index, 1);
        return;
      }
      state.chair = [...state.chair, { ...action.payload, daDat: true }];
    },
    resetTicket: (state, action) => {
      state.chair = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTicket, resetTicket } = bookingSlice.actions;

export default bookingSlice.reducer;
