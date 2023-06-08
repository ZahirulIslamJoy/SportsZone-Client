import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";

const MyClass = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  const [axiosSecure] = useAxiosWithToken();

  const { data: myclassData, refetch: myclassDataRefetch } = useQuery({
    queryKey: [`/classes/${email}`],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${email}`);
      const data = res.data;
      return data;
    },
  });

  console.log(myclassData);

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-12 text-center">
        Welcome,Your All Class Added So Far!
      </h1>
      <div>
        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-1 py-3">
                    Serial No
                  </th>
                  <th scope="col" className="px-6 ml-6 py-3">
                    Avaliable Seats
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Enrolled
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {myclassData?.map((classes, index) => (
                  <tr
                    key={classes._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 h-10 w-10 py-4">{classes?.seats}</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {classes?.price}
                    </td>
                    <td className="px-6  py-4">{classes?.enrolled}</td>
                    <td className="px-6  cursor-pointer py-4">
                      {classes.status}
                    </td>
                    <td className="px-6  cursor-pointer py-4">
                      <button
                        className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 "
                      >
                       Update
                      </button>
                    </td>
                    <td className="px-6  cursor-pointer py-4">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
