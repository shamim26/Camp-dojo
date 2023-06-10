import { Button, Card } from "@material-tailwind/react";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";

const MyClasses = () => {
  const token = localStorage.getItem("access-token");
  const { user } = useAuth();
  const { data: myClasses = [] } = useQuery({
    queryKey: ["my-classes", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://camp-dojo-server.vercel.app/my-classes?email=${user?.email}`,
        { headers: { authorization: `bearer ${token}` } }
      );
      return res.json();
    },
  });

  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        My Classes
      </h1>
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
                Available Seats
              </th>
              <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Enrolled Students
              </th>
              <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Price
              </th>
              <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Status
              </th>
              <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Feedback
              </th>
              <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((classItem, index) => (
              <tr key={index}>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  {index + 1}
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  {classItem?.name}
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  {classItem?.availableSeats}
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  {classItem?.enrolledStudents}
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  ${classItem?.price}
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  <p
                    className={
                      classItem?.status === "pending"
                        ? "text-yellow-700"
                        : classItem?.status === "denied"
                        ? "text-red-600"
                        : "text-green-600"
                    }
                  >
                    {classItem?.status}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  {classItem?.feedback}
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  <Button>update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyClasses;
