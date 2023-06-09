import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";
import { Card } from "@material-tailwind/react";

const EnrolledClass = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const { data: enrolledClasses = [], refetch } = useQuery({
    queryKey: ["enrolled-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5100/enrolled-classes?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  console.log(enrolledClasses);
  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        My Enrolled Classes
      </h1>
      <div>
        <Card className="overflow-auto rounded-none  h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  #
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Class Name
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Email
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Price
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {enrolledClasses.map((classItem, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {index + 1}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.name}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.studentEmail}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    ${classItem?.price}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    Paid
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default EnrolledClass;
