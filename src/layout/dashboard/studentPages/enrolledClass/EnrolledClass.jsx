import React from "react";
import useEnrolledClass from "../../../../hooks/useEnrolledClass";

const EnrolledClass = () => {
 const [enrolledClass]=useEnrolledClass();
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
              <th scope="col" className="px-1 py-3">
                Class Image
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
                <td className="px-6   py-4">
                    <img className="h-10 w-10 rounded-full" src={classes?.classImage} alt="" />
                </td>
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
