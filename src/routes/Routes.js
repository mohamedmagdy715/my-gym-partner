import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ROUTES_PATHS } from "../utils/RoutesPaths";
import SignIn from "../containers/Auth/SignIn";
import SignUp from "../containers/Auth/SignUp";
import Home from "../containers/Home";
import Exercise from "../containers/Exercise";
import Muscle from "../containers/Muscle";
import Layout from "../containers/Layout";
import AuthLayout from "../containers/Layout/AuthLayout";
import Error from "../containers/Error";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const { token: isAuth } = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            !isAuth ? <AuthLayout /> : <Navigate to={ROUTES_PATHS.home} />
          }
        >
          <Route path={ROUTES_PATHS.signIn} element={<SignIn />} />
          <Route path={ROUTES_PATHS.signUp} element={<SignUp />} />
        </Route>
        <Route
          element={
            !!isAuth ? <Layout /> : <Navigate to={ROUTES_PATHS.signIn} />
          }
        >
          <Route path={ROUTES_PATHS.home} element={<Home />} />
          <Route path={ROUTES_PATHS.exercise} element={<Exercise />} />
          <Route path={ROUTES_PATHS.muscle} element={<Muscle />} />
          <Route path={"*"} element={<Error />} />
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
