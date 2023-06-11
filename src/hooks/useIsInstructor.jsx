import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxiosWithToken from './useAxiosWithToken';

const useIsInstructor = () => {
    const {user,loading}=useContext(AuthContext);
    const email=user?.email;
    const [axiosSecure]=useAxiosWithToken();

    const { data: isInstructors, refetch:instructorRefetch,isLoading:instructorLoading } = useQuery({
    queryKey: ["/users/instructor",email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`${import.meta.env.VITE_URL}/users/instructor/${email}`);
      const data = res.data.instructor;
      return data;
    },
  });

    return [isInstructors,instructorLoading]
};

export default useIsInstructor;