import React from 'react';
import Theme from '../Theme.js';
import Skills from '../components/Skills.js';
import About from '../components/Info.js';
import Projects from '../components/Projects.js';
import Sidebar from '../components/Sidebar.js';

export default function Home() {
  document.body.classList.add("bg-white", "dark:bg-black");
  const resume = () => { alert("I will Upload soon") };

  return (

    <div className='grid sm:grid-cols-4 gap-4'>
      <Sidebar />
      <div className="h-screen grid-flow-row  items-center mt-32 flex-col col-span-3 ">
        <About/>
        <Skills/>
        <Projects/>

      </div>

      

    </div>

  );

}