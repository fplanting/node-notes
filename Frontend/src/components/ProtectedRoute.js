import { Navigate } from "react-router-dom";
import { useLogin } from "../services/login.provider";

export const ProtectedRoute = ({ children }) => {
  const { user } = useLogin();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
