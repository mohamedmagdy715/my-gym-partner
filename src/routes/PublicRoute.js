import { Navigate, Route } from "react-router-dom";
import Auth from "../utils/Auth";
import { ROUTES_PATHS } from "../utils/RoutesPaths";

const PublicRoute = ({ element: Element, ...rest }) =>
  !Auth.isAuth() ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to={ROUTES_PATHS.home} />
  );

export default PublicRoute;
