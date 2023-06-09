import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const id=useParams().id;
    console.log(id);


    return (
        <div>
            <h1>Pay Here</h1>
        </div>
    );
};

export default Payment;