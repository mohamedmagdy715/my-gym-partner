import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";

import { toggleLocale } from "../../store/Locale/slice";
import { toggleMode } from "../../store/darkmode/slice";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.darkmode);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, mr: 4 }}>
        <LanguageIcon
          sx={{ mx: 1 }}
          onClick={() => {
            dispatch(toggleLocale());
          }}
        />
        {mode === "light" ? (
          <DarkModeIcon
            className="pointer"
            onClick={() => {
              dispatch(toggleMode());
            }}
          />
        ) : (
          <LightModeIcon
            className="pointer"
            onClick={() => {
              dispatch(toggleMode());
            }}
          />
        )}
      </Box>
      <Outlet />
    </>
  );
};

export default AuthLayout;
