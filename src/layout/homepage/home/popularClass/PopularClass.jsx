import axios from 'axios';
import React from 'react';

const PopularClass = () => {

    axios.get(`${import.meta.env.VITE_URL}/popularclass`)
    .then(res =>{
        console.log(res.data);
    })



    return (
        <div>
            <h1 className='text-3xl text-center mt-12 mb-12'>Our Popular Classes</h1>
        </div>
    );
};

export default PopularClass;