import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../store/invoiceSlice";

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;