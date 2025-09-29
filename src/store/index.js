import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import bookingSlice from "./bookingSlice";
import authSlice from "./auth.slice";
import adminSlice from "./admin.slice";

export const store = configureStore({
  reducer: {
    homeSlice,
    bookingSlice,
    authSlice,
    adminSlice,
  },
});
