export const getDesignTokens = (mode, isRtl) => ({
  direction: isRtl ? "rtl" : "ltr",
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#5c4fa1" },
          secondary: { main: "#2d3133" },
          text: {
            primary: "#171717",
            secondary: "#767676",
          },
        }
      : {
          // palette values for dark mode
          primary: { main: "#5c4fa1" },
          secondary: { main: "#d4d9d6" },
          text: {
            primary: "#5c4fa1",
            secondary: "#d4d9d6",
          },
        }),
  },
  typography: {
    fontFamily: ['"FiraSans-Regular"', "sans-serif"].join(","),
    body1: {
      fontFamily: "FiraSans-Regular",
    },
    body2: {
      fontFamily: "FiraSans-Light",
    },
    button: {
      fontFamily: "FiraSans-Bold",
      fontSize: 20,
    },
    h5: {
      fontFamily: "FiraSans-Bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        a {
          color: ${themeParam.palette.primary.main};
          font-size: small
        }
      `,
    },
  },
});
