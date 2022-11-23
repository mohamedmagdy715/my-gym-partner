import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "../utils/Auth";
import { ROUTES_PATHS } from "../utils/RoutesPaths";
import SignIn from "../containers/Auth/SignIn";
import SignUp from "../containers/Auth/SignUp";
import Home from "../containers/Home";
import Layout from "../containers/Layout";
import AuthLayout from "../containers/Layout/AuthLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            !Auth.isAuth() ? (
              <AuthLayout />
            ) : (
              <Navigate to={ROUTES_PATHS.home} />
            )
          }
        >
          <Route path={ROUTES_PATHS.signIn} element={<SignIn />} />
          <Route path={ROUTES_PATHS.signUp} element={<SignUp />} />
        </Route>
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
