import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
      </div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
