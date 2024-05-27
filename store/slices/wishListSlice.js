import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const wishListSlice = createSlice({
  name: "wishedItems",
  initialState: [],
  reducers: {
    updateWishList: (state, action) => {
      const exists = state.some((item) => item.id === action.payload.id);
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (exists) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { updateWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
