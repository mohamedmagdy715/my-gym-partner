import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";

import Loader from "../components/Loader";
import AppRoutes from "../routes/Routes";
import { getDesignTokens } from "../utils/Theme";
import Snackbar from "../components/Snackbar";
import { toggleLocale } from "../store/Locale/slice";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("light");
  const { isRtl } = useSelector((state) => state.locale);
  const { isLoading } = useSelector((state) => state.loader);

  const cacheLtr = createCache({
    key: "muiltr",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    // prefixer is the only stylis plugin by default, so when
    // overriding the plugins you need to include it explicitly
    // if you want to retain the auto-prefixing behavior.
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [isRtl]);

  return (
    <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={createTheme(getDesignTokens(mode, isRtl))}>
        <CssBaseline />
        <Container>
          <div className="d-flex justify-content-end mt-3 me-4">
            <LanguageIcon
              className="pointer mx-3"
              onClick={() => {
                dispatch(toggleLocale());
              }}
            />
            {mode === "light" ? (
              <DarkModeIcon
                className="pointer"
                onClick={() => {
                  setMode("dark");
                }}
              />
            ) : (
              <LightModeIcon
                className="pointer"
                onClick={() => {
                  setMode("light");
                }}
              />
            )}
          </div>
          <AppRoutes />
          {isLoading && <Loader />}
          <Snackbar />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
