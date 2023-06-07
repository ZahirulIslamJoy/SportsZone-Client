import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const ManageUsers = () => {
  const { data: userData } = useQuery({
    queryKey: ["/users"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/users`);
      const data = res.data;
      return data;
    },
  });

  console.log(userData);

  return (
    <div>
      <div>
        <h1 className="text-center mb-20">Manage All Users</h1>
      </div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 ml-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Current Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user, index) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 h-10 w-10 py-4">
                    {
                        user?.name
                    }
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user?.email}
                  </td>
                  <td className="px-6  py-4">{user?.role}</td>
                  <td
                    className="px-6  cursor-pointer py-4"
                  >
                   Update/Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
