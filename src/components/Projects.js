import React from 'react';
import { useState, useEffect } from "react";
import Repocard from './utils/Repocard';


export default function Projects() {



    
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/shankjbs571/repos", {
        method: "GET",
        // headers: {
        //     "X-RapidAPI-Key": "your-api-key",
        //     "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
        // },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("settign repos");
            setRepo(data);
            console.log("done");
            console.log("this is repo set");
            console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <div id='projects' className='flex flex-col pt-10 pb-10 '>
            <div className="flex justify-centre">

              <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
                <p className="mt-10 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Projects</p>
                <div className="inline-grid pt-10 lg:flex lg:items-center gap-3">
                  <div className="flex flex-row flex-wrap  gap-3 justify-evenly sm:justify-start  ">
                    
                  {repo.map((rep) => {
                    if (rep.description && rep.description.trim() && rep.fork == false) {
                      return <Repocard key={rep.id} Repo={rep} />;
                    }
                    return null;
                  })}

                      
                    
                  </div>

                    

                </div>

              </div>
            </div>

        </div>
    );


}