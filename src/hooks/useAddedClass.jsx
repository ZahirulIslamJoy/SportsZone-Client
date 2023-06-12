import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosWithToken from "./useAxiosWithToken";
import { useQuery } from "@tanstack/react-query";
import useIsStudent from "./useIsStudent";

const useAddedClass = () => {
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const [isStudent]=useIsStudent();
    const [axiosSecure] = useAxiosWithToken();
  
    const { data: SelectedClass=[], refetch:classRefetch } = useQuery({
      queryKey: [`/selectedClass/${email}`],
      enabled: !!isStudent &&   !!email &&  !loading ,
      queryFn: async () => {
        const res = await axiosSecure.get(`/selectedClass/${email}`);
        const data = res.data;
        return data;
      },
    });

    return [SelectedClass,classRefetch];
}

export default useAddedClass;
