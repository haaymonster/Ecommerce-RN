import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    updateUserInfo: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
