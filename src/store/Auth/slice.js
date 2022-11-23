import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(sessionStorage.getItem("user")) ||
      {},
  },
  reducers: {
    signInRequest: () => {},
    signInResponse: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signInRequest, signInResponse } = authSlice.actions;
export default authSlice.reducer;
