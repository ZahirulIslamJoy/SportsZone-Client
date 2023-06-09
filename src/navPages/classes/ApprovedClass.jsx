import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ApprovedClass = () => {



    const { data: approvedClasses, refetch} = useQuery({
        queryKey: ["/verifiedclass"],
        queryFn: async () => {
          const res = await axios.get(`${import.meta.env.VITE_URL}/verifiedclass`);
          const data = res.data;
          return data;
        },
      });

      console.log(approvedClasses);



    return (
        <div>
            <h1>okkkkk</h1>
        </div>
    );
};

export default ApprovedClass;