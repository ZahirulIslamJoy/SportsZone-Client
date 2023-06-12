import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosWithToken from "./useAxiosWithToken";

const useIsAdmin = () => {

    const {user,loading}=useContext(AuthContext);
    const email=user?.email;
    const [axiosSecure]=useAxiosWithToken();
    console.log("hi iam here")
    console.log(email)


  const { data: isAdmin, refetch:adminRefetch,isLoading:adminLoading } = useQuery({
    queryKey: ["/users/admin"],
    enabled:!loading && !!email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${email}`);
      const data = res.data.admin;
      return data;
    },
    
  });
  console.log("iam here also")

    return [isAdmin,adminLoading]
};

export default useIsAdmin;
