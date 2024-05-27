import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import checkoutSlice from "./slices/checkoutSlice";
import orderSlice from "./slices/orderSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    cartItems: cartReducer,
    wishedItems: wishListReducer,
    checkoutItems: checkoutSlice,
    orderHistory: orderSlice,
    userInfo: userReducer,
  },
});
