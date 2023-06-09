import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const { data: isInstructor, isLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5100/users/instructor/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isInstructor, isLoading];
};

export default useInstructor;
