import React, { useEffect } from 'react';
import Slider from './slider/Slider';
import { initFlowbite } from 'flowbite'
import PopularClass from './popularClass/PopularClass';

const Home = () => {

 

    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;