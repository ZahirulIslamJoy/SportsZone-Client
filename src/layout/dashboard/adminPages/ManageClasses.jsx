import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Button, Modal } from "flowbite-react";

const ManageClasses = () => {
  const { loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosWithToken();

  const { data: allclassData, refetch: allclassDataRefetch } = useQuery({
    queryKey: [`/allclasses`],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`allclasses`);
      const data = res.data;
      return data;
    },
  });

  const handleApprove = async (id) => {
    const status = "approved";
    const newStatus = { status };
    const res = await axiosSecure.patch(`/classes/${id}`, newStatus);
    const data = res.data;
    if (data.modifiedCount > 0) {
      allclassDataRefetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class Is Approved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeny = async (id) => {
    const status = "denied";
    const newStatus = { status };
    const res = await axiosSecure.patch(`/classes/${id}`, newStatus);
    const data = res.data;
    if (data.modifiedCount > 0) {
      allclassDataRefetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "This Class Is Denied",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const showModal = async (id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
       const feedback=text;
       const sendingFeedback={feedback}
       const res = await axiosSecure.patch(`/class/${id}`, sendingFeedback);
       const data = res.data;
       if (data.modifiedCount > 0) {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Feedback Send To The Instructor",
           showConfirmButton: false,
           timer: 1500,
         });
       }

    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Provide Some Feedback",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-12 text-center">
        Manage Classes Here!!
      </h1>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 ml-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Class Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Instructor Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Seats
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
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
              {allclassData?.map((classes, index) => (
                <tr
                  key={classes._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6  py-4">
                    <img
                      className="h-10 rounded-xl  w-10"
                      src={classes?.image}
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {classes?.className}
                  </td>
                  <td className="px-6  py-4">{classes?.instructorName}</td>
                  <td className="px-6  cursor-pointer py-4">
                    {classes?.instructorEmail}
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    {classes?.seats}
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    {classes?.price}
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    {classes?.status}
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    <button
                      disabled={
                        classes?.status == "approved" ||
                        classes?.status == "denied"
                      }
                      onClick={() => handleApprove(classes._id)}
                      className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 "
                    >
                      Approve
                    </button>
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    <button
                      onClick={() => handleDeny(classes._id)}
                      disabled={
                        classes?.status == "approved" ||
                        classes?.status == "denied"
                      }
                      className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 "
                    >
                      Deny
                    </button>
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    <button
                      onClick={()=>showModal(classes._id)}
                      className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 "
                    >
                      Feedback
                    </button>
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

export default ManageClasses;
