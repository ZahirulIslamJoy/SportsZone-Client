import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxiosWithToken from './useAxiosWithToken';
import { useQuery } from '@tanstack/react-query';
import useIsStudent from './useIsStudent';

const useEnrolledClass = () => {
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const [axiosSecure] = useAxiosWithToken();
    const [isStudent]=useIsStudent();

    const { data: enrolledClass } = useQuery({
        queryKey: [`/payment/${email}`],
        enabled:!!isStudent  &&!!email  && !loading,
        queryFn: async () => {
          const res = await axiosSecure.get(`payment/${email}`);
          const data = res.data;
          return data;
        },
      });
      return [enrolledClass]
};

export default useEnrolledClass;