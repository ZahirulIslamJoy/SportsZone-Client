import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  const [axiosSecure] = useAxiosWithToken();

  const { data: enrolledClass } = useQuery({
    queryKey: [`/payment/${email}`],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`payment/${email}`);
      const data = res.data;
      return data;
    },
  });

  console.log(enrolledClass);

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-12 text-center">Your Enrolled Class</h1>
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
              <th scope="col" className="px-6 ml-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                Paid Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass?.map((classes, index) => (
              <tr
                key={classes._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6  py-4">{classes?.className}</td>
                <td className="px-6  py-4">{classes?.instructor}</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {classes?.payAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;