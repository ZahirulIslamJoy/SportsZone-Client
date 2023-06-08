import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useIsInstructor = () => {
    const {user,loading}=useContext(AuthContext);
    const email=user?.email;

    const { data: isInstructors, refetch:instructorRefetch,isLoading:instructorLoading } = useQuery({
    queryKey: ["/users/instructor",email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/users/instructor/${email}`);
      const data = res.data.instructor;
      return data;
    },
  });

    return [isInstructors,instructorLoading]
};

export default useIsInstructor;