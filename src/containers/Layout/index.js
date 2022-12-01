import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

import { toggleMode } from "../../store/darkmode/slice";
import { toggleLocale } from "../../store/Locale/slice";
import messages from "../../assets/locales";
import { ROUTES_PATHS } from "../../utils/RoutesPaths";
import { signOutRequest } from "../../store/Auth/slice";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Layout = () => {
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.locale);
  const { mode } = useSelector((state) => state.darkmode);
  const { user } = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const handleSignOutClicked = () => {
    dispatch(signOutRequest({ navigate }));
  };

  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Link to={ROUTES_PATHS.home}>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <img
                src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/flexed-biceps_light-skin-tone_1f4aa-1f3fb_1f3fb.gif"
                alt="logo"
                width={"40px"}
              />
            </Avatar>
          </Link>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {messages[locale]["navbar"]["title"]}
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ mr: 1, display: { xs: "none", sm: "block" } }}>
              {!!user.firstName && user.firstName}{" "}
              {!!user.lastName && user.lastName}
            </Typography>
            <LogoutOutlined
              className="pointer"
              onClick={handleSignOutClicked}
            />
            <LanguageIcon
              className="pointer"
              onClick={() => {
                dispatch(toggleLocale());
              }}
              sx={{ mx: 1 }}
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
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          mt: 10,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
