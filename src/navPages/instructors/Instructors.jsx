import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { motion } from "framer-motion";

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
    <div className="bg-[#282a35]" >
      <div className="w-[85%] pb-16  mx-auto">
        <h1 className="text-3xl text-white pt-20 mb-20 text-center">
          Meet With our Instructors
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {instructors?.map((singleInstructor) => (
            <div class="w-full max-w-sm mb-12 bg-gray-200 border border-gray-200 rounded-lg shadow">
              <div class="flex flex-col items-center pb-10">
                <motion.div
                  className="mt-4"
                  animate={{
                    scale: [1, 1.3, 1.3, 1],
                    rotate: [0, 0, 0, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <img
                    class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg"
                    src={singleInstructor.photo}
                    alt="instructor image"
                  />
                </motion.div>
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
    </div>
  );
};

export default Instructors;
