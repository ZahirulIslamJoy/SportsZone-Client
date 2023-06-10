import React, { useEffect } from 'react';
import Slider from './slider/Slider';
import { initFlowbite } from 'flowbite'
import PopularClass from './popularClass/PopularClass';
import BestInstructors from './bestInstructors/BestInstructors';

const Home = () => {

 

    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <BestInstructors></BestInstructors>
        </div>
    );
};

export default Home;