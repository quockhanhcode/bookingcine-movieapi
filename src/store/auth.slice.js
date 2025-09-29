import { createSlice } from "@reduxjs/toolkit";

const userLocal = localStorage.getItem("user");

const initialState = {
  user: userLocal ? JSON.parse(userLocal) : null,
  statusBtn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    getButtonEdit: (state, action) => {
      state.statusBtn = action.payload;
    },
  },
});
export const { setUser, clearUser, getButtonEdit } = authSlice.actions;
export default authSlice.reducer;
