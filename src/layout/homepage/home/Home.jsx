import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite'
import PopularClass from './popularClass/PopularClass';
import BestInstructors from './bestInstructors/BestInstructors';
import Sliders from './slider/Slider';

const Home = () => {

 

    return (
        <div>
            <Sliders></Sliders>
            <PopularClass></PopularClass>
            <BestInstructors></BestInstructors>
        </div>
    );
};

export default Home;