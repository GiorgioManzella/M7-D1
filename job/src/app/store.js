import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../slice/favourites/favoritesSlice.js";

export default configureStore({
  reducer: {
    favourites: favouriteReducer,
  },
});
