import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
