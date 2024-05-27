import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkoutItems",
  initialState: [],
  reducers: {
    updateCheckoutList: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const { updateCheckoutList } = checkoutSlice.actions;

export default checkoutSlice.reducer;
