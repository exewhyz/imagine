// import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import Loader from "@/components/loader";
import { useUser } from "@/hooks/use-user";

const ProtectedRoute = ({ children }) => {
  // const { isLoaded, isSignedIn } = useAuth();
  const {isLoading, user} = useUser();
  const isLoaded = !isLoading;
  const isSignedIn = !!user;

  if (!isLoaded) {
    return (
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;
