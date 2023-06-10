import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import useInstructor from "../hooks/useInstructor";

const InstructorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isLoading] = useInstructor();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  if (user && isInstructor?.instructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoutes;
