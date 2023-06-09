import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Instructors = () => {
  const { data: instructors, refetch } = useQuery({
    queryKey: ["/instructors"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/instructors`);
      const data = res.data;
      return data;
    },
  });

  console.log(instructors);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl mt-12 mb-12 text-center">
        Meet With our Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {instructors?.map((singleInstructor) => (
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg"
                src={singleInstructor.photo}
                alt="instructor image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
               {singleInstructor.name}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
              {singleInstructor.email}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
