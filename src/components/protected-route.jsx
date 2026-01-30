import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;
