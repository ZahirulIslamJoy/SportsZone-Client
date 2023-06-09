import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Instructors = () => {

    const { data:instructors, refetch } = useQuery({
        queryKey: ["/instructors"],
        queryFn: async () => {
          const res = await axios.get(`${import.meta.env.VITE_URL}/instructors`);
          const data = res.data;
          return data;
        },
      });

      console.log(instructors);


    return (
        <div>
            <h1>
                okkkk
            </h1>
        </div>
    );
};

export default Instructors;