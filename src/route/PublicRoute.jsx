import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
