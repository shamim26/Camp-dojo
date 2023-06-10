import { Avatar, Button, Card } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageUser = () => {
  const token = localStorage.getItem("access-token");

  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await fetch("https://camp-dojo-server.vercel.app/all-users", {
        headers: { authorization: `bearer ${token}` },
      });
      return res.json();
    },
  });

  const handleUpdateRole = (role) => {
    axios
      .put("https://camp-dojo-server.vercel.app/all-users", role, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Role Updated", "", "success");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        Manage Users
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
                  Image
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Name
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Email
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Role
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
              {allUsers.map((user, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {index + 1}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <Avatar
                      src={user?.image}
                      referrerPolicy="no-referrer"
                      alt="avatar"
                      variant="rounded"
                    />
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {user?.name}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {user?.email}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {user?.role}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <Button
                      onClick={() =>
                        handleUpdateRole({ role: "admin", email: user?.email })
                      }
                      disabled={user?.role === "admin"}
                    >
                      Make Admin
                    </Button>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    <Button
                      onClick={() =>
                        handleUpdateRole({
                          role: "instructor",
                          email: user?.email,
                        })
                      }
                      disabled={
                        user?.role === "admin" || user?.role === "instructor"
                      }
                    >
                      Make Instructor
                    </Button>
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

export default ManageUser;
