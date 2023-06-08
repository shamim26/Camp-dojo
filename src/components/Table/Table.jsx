import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon} from "@heroicons/react/24/solid";

const Table = ({ TABLE_HEAD, TABLE_ROWS }) => {
  return (
    <div>
      <Card className="overflow-auto rounded-none  h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, i) => (
                <th
                  key={i}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((classItem, index) => (
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
                    <Link className="px-3 py-1 bg-custom1 text-white rounded-xl">Pay</Link>
                </td>
                <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                  <button><TrashIcon className="h-6 w-6"/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
