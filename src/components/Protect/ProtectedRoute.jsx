import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ element: Component, isLoggedIn, ...rest }) {
  const location = useLocation();

  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to="/restaurant/login"
      state={{ from: location }} // Pass original location
    />
  );
}

export default ProtectedRoute;
