import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";
import { Card } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SelectedClasses = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://camp-dojo-server.vercel.app/selected-classes?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://camp-dojo-server.vercel.app/selected-classes/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        My Selected Classes
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
                  Seats
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Price
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Action
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((classItem, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {index + 1}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.name}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {classItem?.seats}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    ${classItem?.price}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <Link
                      to="/dashboard/payment"
                      state={{
                        price: classItem?.price,
                        classItem: classItem,
                      }}
                      className="px-3 py-1 bg-custom1 text-white rounded-xl"
                    >
                      Pay
                    </Link>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <button onClick={() => handleDelete(classItem?._id)}>
                      <TrashIcon className="h-6 w-6" />
                    </button>
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

export default SelectedClasses;
