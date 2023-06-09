import { Avatar, Button, Card } from "@material-tailwind/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Modal from "../../../components/Modal/Modal";

const ManageClass = () => {
  const token = localStorage.getItem("access-token");
  const [open, setOpen] = useState(false);

  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5100/all-classes", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
  });

  const handleUpdateStatus = () => {
    // TODO: update status of classes to approved or denied
  };

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        Manage Classes
      </h1>
      <div>
        <Card className="overflow-auto rounded-none  h-full w-full">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  #
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Image
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Class Name
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Instructor name
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Instructor email
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Available seats
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Price
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Status
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Action
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody>
              {allClass.map((classItem, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {index + 1}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <Avatar
                      src={classItem?.image}
                      alt="avatar"
                      variant="square"
                    />
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.name}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.instructorName}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.instructorEmail}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.availableSeats}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    ${classItem?.price}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <p
                      className={
                        classItem.status === "approved"
                          ? "text-green-500"
                          : classItem.status === "pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }
                    >
                      {classItem?.status}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <div className="space-y-2">
                      <Button
                        disabled={
                          classItem?.status === "approved" ||
                          classItem?.status === "denied"
                        }
                        size="sm"
                      >
                        Approve
                      </Button>
                      <Button
                        disabled={
                          classItem?.status === "approved" ||
                          classItem?.status === "denied"
                        }
                        size="sm"
                        color="red"
                      >
                        Deny
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <Button onClick={handleOpen} color="deep-orange">
                      Feedback
                    </Button>
                    <Modal
                      open={open}
                      handleOpen={handleOpen}
                      classItem={classItem}
                    />
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

export default ManageClass;
