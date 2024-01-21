import { createSlice } from "@reduxjs/toolkit";

const cardGallerySlice = createSlice({
  name: "imageGallery",
  initialState: {
    imageGallery: [],
  },
  reducers: {
    updateImageGallery: (state, action) => {
      state.imageGallery = action.payload;
    },
  },
});

export const { updateImageGallery } = cardGallerySlice.actions;

export default cardGallerySlice.reducer;
