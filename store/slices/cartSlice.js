import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const exists = state.some((item) => item.id === action.payload.id);
      if (exists) {
        Alert.alert("Already in shopping cart.");
      } else {
        state.push(action.payload);
        Alert.alert("Added successfully!");
      }
    },
    deleteFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    batchDeleteFromCart: (state, action) => {
      for (let i = state.length - 1; i >= 0; i--) {
        if (action.payload.some((item) => item.id === state[i].id)) {
          state.splice(i, 1);
        }
      }
    },
    toggleSelectItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].selected = !state[index].selected;
      }
    },
    editQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (action.payload.type === "increase") {
        state[index].quantity = state[index].quantity + 1;
      } else {
        state[index].quantity = state[index].quantity - 1;
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  toggleSelectItem,
  editQuantity,
  batchDeleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
