import { Card } from "@material-tailwind/react";
import React from "react";

const ManageUser = () => {
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
                   Name
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
              {/* {selectedClasses.map((classItem, index) => (
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
                  
                </tr>
              ))} */}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default ManageUser;
