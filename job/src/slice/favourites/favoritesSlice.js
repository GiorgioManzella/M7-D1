import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",

  initialState: {
    list: [],
  },

  reducers: {
    addToFavourite: (state, action) => {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },

    removeFromFavourite: (state, action) => {
      return {
        ...state,
        list: state.list.filter(
          (company_name) => company_name !== action.payload
        ),
      };
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
