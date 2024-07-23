import photo from '../assets/shashank.jpg';
import React from 'react';
import WeeklyContributionsLineChart from './utils/WeeklyContributionsLineChart';


export default function Image() {
    var image = <img className=" rounded-full border-black dark:border-white" src={photo} height="200" width="200"></img>;
    // if (window.innerWidth < 1024) {
    //     image = "";
    // }


    return (
        <div className="max-lg:flex sm:flex sm:flex-row max-lg:justify-around sm:items-center sm:justify-between mr-20">
            
            <div>{image}</div>
            <div className="chart-container mr-40 h-[100px] w-[400px]">
                <h1 className='font-bold'>GitHub this Week</h1>
                <WeeklyContributionsLineChart />
            </div>
            
               

        </div>
    );
}