import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orderHistory",
  initialState: [],
  reducers: {
    updateOrderHistory: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { updateOrderHistory } = orderSlice.actions;

export default orderSlice.reducer;
