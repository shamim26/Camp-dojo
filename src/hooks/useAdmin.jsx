import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://camp-dojo-server.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
