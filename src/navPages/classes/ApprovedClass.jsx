import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const ApprovedClass = () => {

    const {user}=useContext(AuthContext);
    console.log(user)

  const { data: approvedClasses, refetch } = useQuery({
    queryKey: ["/verifiedclass"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/verifiedclass`);
      const data = res.data;
      return data;
    },
  });

  console.log(approvedClasses);

  return (
    <div className="w-[90%] mx-auto ">
      <div>
        <h1 className="text-3xl  text-center mt-12 mb-12">
          Pick Up Your Best Class Now!!!
        </h1>
      </div>
      <div className="grid grid-cols-3">
        {approvedClasses?.map((singleClass) => (
          <div key={singleClass._id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img
                className="rounded-t-lg h-[300px] w-full "
                src={singleClass.image}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {singleClass.className}
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Instructor: {singleClass.instructorName}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Seats: {singleClass.seats}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Price: {singleClass.price}
                </p>
                <button onClick={()=>handleCourseSubmit(singleClass._id)} className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 ">
                  Select Course
                </button>
              </div>
            </div>
            ;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedClass;
