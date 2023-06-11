import React, { useEffect } from 'react';
import PopularClass from './popularClass/PopularClass';
import BestInstructors from './bestInstructors/BestInstructors';
import Sliders from './slider/Slider';
import Activities from './activities/Activities';

const Home = () => {

 

    return (
        <div>
            <Sliders></Sliders>
            <PopularClass></PopularClass>
            <BestInstructors></BestInstructors>
            <Activities></Activities>
        </div>
    );
};

export default Home;