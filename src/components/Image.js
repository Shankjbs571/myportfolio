import photo from '../assets/shashank.jpg';
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';



export default function Image() {
    var image = <img className=" rounded-full border-black dark:border-white" src={photo} height="200" width="200"></img>;
    // if (window.innerWidth < 1024) {
    //     image = "";
    // }


    return (
        <div className=" max-lg:flex  max-lg:justify-center">
            
            <div>{image}</div>
            
               

        </div>
    );
}