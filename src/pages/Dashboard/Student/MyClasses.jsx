import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";
import Table from "../../../components/Table/Table";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5100/selected-classes?email=rejashamim00@gmail.com`
      );
      return res.json();
    },
  });

  const tableHead = ["#", "Class Name", "Seats", "Price", "Action", "Action"];
  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        My Selected Classes
      </h1>
      <div>
        <Table TABLE_HEAD={tableHead} TABLE_ROWS={selectedClasses} />
      </div>
    </div>
  );
};

export default MyClasses;
