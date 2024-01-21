import { createSlice } from "@reduxjs/toolkit";

const selectedCardSlice = createSlice({
  name: "selectedCard",
  initialState: {
    selectedCard: null,
    selectedCardFlag: false,
  },
  reducers: {
    updateSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    closeSelectedCard: (state) => {
      state.selectedCardFlag = false;
    },
    openSelectedCard: (state) => {
      state.selectedCardFlag = true;
    },
  },
});

export const { updateSelectedCard, closeSelectedCard, openSelectedCard } =
  selectedCardSlice.actions;

export default selectedCardSlice.reducer;
