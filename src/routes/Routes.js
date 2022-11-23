import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
import Auth from "../utils/Auth";
import { ROUTES_PATHS } from "../utils/RoutesPaths";
import SignIn from "../containers/Auth/SignIn";
import SignUp from "../containers/Auth/SignUp";
import Home from "../containers/Home";
import Layout from "../containers/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES_PATHS.signIn}
          element={
            !Auth.isAuth() ? <SignIn /> : <Navigate to={ROUTES_PATHS.home} />
          }
        />
        <Route
          path={ROUTES_PATHS.signUp}
          element={
            !Auth.isAuth() ? <SignUp /> : <Navigate to={ROUTES_PATHS.home} />
          }
        />
        <Route
          element={
            Auth.isAuth() ? <Layout /> : <Navigate to={ROUTES_PATHS.signIn} />
          }
        >
          <Route path={ROUTES_PATHS.home} element={<Home />} />
        </Route>
        <Route
          path={ROUTES_PATHS.root}
          element={<Navigate to={ROUTES_PATHS.home} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
