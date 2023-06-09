import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";

const SelectedClass = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  const [axiosSecure] = useAxiosWithToken();

  const { data: SelectedClass, refetch } = useQuery({
    queryKey: [`/selectedClass/${email}`],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClass/${email}`);
      const data = res.data;
      return data;
    },
  });
  console.log(SelectedClass);

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-12 text-center">
        Your Selected Classes
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
              <th scope="col" className="px-6 ml-6 py-3">
                Instructor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {SelectedClass?.map((classes, index) => (
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
                  {classes?.price}
                </td>
                <td className="px-6  cursor-pointer py-4">
                  <button className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 ">
                    Pay
                  </button>
                </td>
                <td className="px-6  cursor-pointer py-4">
                  <button className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
