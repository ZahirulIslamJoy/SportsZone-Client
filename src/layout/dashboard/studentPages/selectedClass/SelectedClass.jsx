import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";

const SelectedClass = () => {

    const {user,loading}=useContext(AuthContext);
    const email=user?.email;
    const [axiosSecure] = useAxiosWithToken();
  
    const { data: SelectedClass, refetch } = useQuery({
    queryKey: [`/selectedClass/${email}`],
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
      <div></div>
    </div>
  );
};

export default SelectedClass;
