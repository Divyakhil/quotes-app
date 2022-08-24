import { configureStore } from "@reduxjs/toolkit";
import { quotesDetailsReducer } from "../redux/quotesDetailsSlice";

export const store = configureStore({
  reducer: {
    quotesDetailsReducer: quotesDetailsReducer,
  },
});
