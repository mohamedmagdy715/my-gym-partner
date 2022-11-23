import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    showHideLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { showHideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
