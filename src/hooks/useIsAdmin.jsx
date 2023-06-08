import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useIsAdmin = () => {

    const {user,loading}=useContext(AuthContext);
    const email=user?.email;


  const { data: isAdmin, refetch:adminRefetch,isLoading:adminLoading } = useQuery({
    queryKey: ["/users/admin",email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/users/admin/${email}`);
      const data = res.data.admin;
      return data;
    },
  });

    return [isAdmin,adminLoading]
};

export default useIsAdmin;
