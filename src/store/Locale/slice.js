import { createSlice } from "@reduxjs/toolkit";

export const localeSlice = createSlice({
  name: "locale",
  initialState: {
    locale: "en",
    isRtl: false,
  },
  reducers: {
    toggleLocale: (state) => {
      state.locale = state.locale === "en" ? "ar" : "en";
      state.isRtl = !state.isRtl;
    },
  },
});

export const { toggleLocale } = localeSlice.actions;
export default localeSlice.reducer;
