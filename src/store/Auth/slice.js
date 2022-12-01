import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    /*
    user:{
      success:false/true,
      token:"",
      user:{}
    }
    */
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
    signUpRequest: () => {},
    signOutRequest: () => {},
    signOutResponse: (state, action) => {
      state.user = {};
    },
  },
});

export const {
  signInRequest,
  signInResponse,
  signUpRequest,
  signOutRequest,
  signOutResponse,
} = authSlice.actions;
export default authSlice.reducer;
