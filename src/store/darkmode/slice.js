import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {
    mode: localStorage.getItem("mode") || "light",
  },
  reducers: {
    toggleMode: (state) => {
      localStorage.setItem("mode", state.mode === "light" ? "dark" : "light");
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
