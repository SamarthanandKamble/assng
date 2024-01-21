import { configureStore } from "@reduxjs/toolkit";
import SearchQueryReducer from "./searchQuerySlice";
import ImageGalleryReducer from "./cardGallerySlice";
import SelectedCardReducer from "./selectedCardSlice";
export const store = configureStore({
  reducer: {
    searchQuery: SearchQueryReducer,
    imageGallery: ImageGalleryReducer,
    selectedCard: SelectedCardReducer,
  },
});
