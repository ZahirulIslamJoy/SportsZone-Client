import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  const [axiosSecure] = useAxiosWithToken();

  const options = {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const { data: paymentInfo } = useQuery({
    queryKey: [`/payment/${email}`],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`payment/${email}`);
      const data = res.data;
      return data;
    },
  });

  console.log(paymentInfo);

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-12 text-center">
        Payment History!!
      </h1>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-1 py-3">
                Serial No
              </th>
              <th scope="col" className="px-1 py-3">
                Class Name
              </th>
              <th scope="col" className="px-1 py-3">
                Amount Paid
              </th>
              <th scope="col" className="px-6 ml-6 py-3">
               Date
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction Id
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentInfo?.map((payment, index) => (
              <tr
                key={payment._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6  py-4">{payment?.className}</td>
                <td className="px-6   py-4">
                {payment?.payAmount}
                </td>
                <td className="px-6  py-4">{new Date(payment?.date).toLocaleString("en-US", options)}</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {payment?.txId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
