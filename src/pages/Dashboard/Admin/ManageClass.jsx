import { Avatar, Button, Card } from "@material-tailwind/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Modal from "../../../components/Modal/Modal";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClass = () => {
  const token = localStorage.getItem("access-token");
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://camp-dojo-server.vercel.app/all-classes",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  const handleUpdateStatus = (data) => {
    console.log(data);
    axios
      .put("https://camp-dojo-server.vercel.app/classes-status", data, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire(`Class ${data?.status}`, "", "info");
          refetch();
        }
      });
  };

  const handleOpen = (id) => {
    setOpen(!open);
    setModalData(id);
  };

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
                          ? "text-green-600"
                          : classItem.status === "pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }
                    >
                      {classItem?.status}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <div className="space-y-2">
                      <Button
                        onClick={() =>
                          handleUpdateStatus({
                            status: "approved",
                            id: classItem?._id,
                          })
                        }
                        disabled={
                          classItem?.status === "approved" ||
                          classItem?.status === "denied"
                        }
                        size="sm"
                      >
                        Approve
                      </Button>
                      <Button
                        onClick={() =>
                          handleUpdateStatus({
                            status: "denied",
                            id: classItem?._id,
                          })
                        }
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
                    <Button
                      onClick={() => handleOpen(classItem?._id)}
                      color="deep-orange"
                    >
                      Feedback
                    </Button>
                    <Modal open={open} handleOpen={handleOpen} id={modalData} />
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
