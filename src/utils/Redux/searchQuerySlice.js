import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: {
    searchQuery: null,
  },
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
