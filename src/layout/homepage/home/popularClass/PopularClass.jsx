import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/popularclass`).then((res) => {
      setPopularClass(res.data);
    });
  }, []);

  return (
    <div className="bg-[#282A35] ">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl text-gray-200 text-center pt-16 mb-20">
          Our Popular Classes
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularClass?.map((singleClass) => (
            <div
              key={singleClass?._id}
              className="max-w-sm mb-8 bg-[#F3ECEA] rounded-lg shadow"
            >
              <img
                className="rounded-t-lg  h-[250px] w-full "
                src={singleClass.image}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight ">
                  Name: {singleClass.className}
                </h5>
                <p className="mb-3 font-normal">Price: {singleClass.price}</p>
                <p className="mb-3 font-normal">
                  Seats Avaliable: {singleClass.seats}
                </p>
                <p className="mb-3 font-normal">
                  Toatal Enrolled: {singleClass.enrolled}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
