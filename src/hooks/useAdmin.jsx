import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5100/users/admin/${user?.email}`
      );
      return res.json();
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
