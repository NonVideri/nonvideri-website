import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  counter: 0,
  max: 0
};

// Slice
export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    submitItems: (state, action) => {
      return {
        ...state,
        list: action.payload,
        counter: 0,
        max: action.payload.length
      };
    },
    pickItem: (state, action) => {
      state.list.splice(action.payload, 1);
      state.counter += 1;
    },
    resetItems: () => initialState
  }
});

// Selectors
export const selectResults = state => state.results;

// Exports
export const { submitItems, pickItem, resetItems } = resultsSlice.actions;
export default resultsSlice.reducer;
