import React from 'react';
import Sidebar from '../components/Sidebar.js';
import { useEffect } from 'react';
export default function Update() {
  document.body.classList.add("bg-white", "dark:bg-black");
  const resume = () => { alert("I will Upload soon") };

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (

    <div className='grid sm:grid-cols-4 gap-4'>
      <Sidebar />
      <div className="h-screen grid-flow-row  items-center mt-32 mr-60 flex-col col-span-3 ">
      <a class="twitter-timeline" href="https://twitter.com/shankjbs175?ref_src=twsrc%5Etfw">Tweets by shankjbs175</a> 
        

      </div>

      

    </div>

  );

}