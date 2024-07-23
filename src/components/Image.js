import photo from '../assets/shashank.jpg';
import React from 'react';
import WeeklyContributionsLineChart from './utils/WeeklyContributionsLineChart';


export default function Image() {
    var image = <img className=" rounded-full border-black dark:border-white" src={photo} height="200" width="200"></img>;
    // if (window.innerWidth < 1024) {
    //     image = "";
    // }


    return (
        <div className="max-lg:flex flex flex-col justify-normal sm:flex-row max-lg:justify-around items-center sm:justify-between sm:mr-20">
            
            <div>{image}</div>
            <div className="chart-container flex flex-col items-center h-[100px] w-[400px] mt-10 sm:mr-40 sm:h-[100px] sm:w-[400px]">
                <WeeklyContributionsLineChart />
                <h1 className='font-bold dark:text-gray-50 '>GitHub this Week</h1>

            </div>
            
               

        </div>
    );
}