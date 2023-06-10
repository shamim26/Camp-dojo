import { Card } from "@material-tailwind/react";
import React from "react";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import moment from "moment/moment";

const PaymentHistory = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["payment-history", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://camp-dojo-server.vercel.app/payment-history?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10">
        Payment History
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
                  Email
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Transaction Id
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Price
                </th>
                <th className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((history, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {index + 1}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {history?.email}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {history?.transactionId}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    ${history?.price}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-gray-700">
                    {moment(history?.date).format("DD-MM-YYYY")}
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

export default PaymentHistory;
