import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useIsStudent = () => {
    const {user,loading}=useContext(AuthContext);
    const email=user?.email;

    const { data: isStudent, refetch:studentRefetch,isLoading:studentLoading } = useQuery({
    queryKey: ["/users/student",email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/users/student/${email}`);
      const data = res.data.student;
      return data;
    },
  });

    return [isStudent,studentLoading]
}
export default useIsStudent;