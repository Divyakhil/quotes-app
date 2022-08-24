import { createSlice } from "@reduxjs/toolkit";
import quotesClient from "../api/quotesClient";

export const quotesDetailsSlice = createSlice({
  name: "quotes-details",
  initialState: { quotesData: [] },
  reducers: {
    getQuotesDetailsData: (state, action) => {
      state.quotesData = action.payload;
    },
  },
});

export const getQuotesDetails = () => {
  return async (dispatch) => {
    try {
      const response = await quotesClient.getRandomQuotes();
      dispatch(quotesDetailsAction.getQuotesDetailsData(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getSelectedQuotesDetails = (data) => {
  return async (dispatch) => {
    try {
      const response = await quotesClient.getSelectedQuotes(data);
      dispatch(quotesDetailsAction.getQuotesDetailsData(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getQuotesDetailsList = () => {
  return async (dispatch) => {
    try {
      const response = await quotesClient.getQuotesList();
      dispatch(quotesDetailsAction.getQuotesDetailsData(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const quotesDetailsAction = quotesDetailsSlice.actions;
export const quotesDetailsReducer = quotesDetailsSlice.reducer;
