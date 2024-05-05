import Image from './components/Image.js';
import React from 'react';
// import resume from './Neil-Purohit.pdf';
import Theme from './Theme.js';
import Skills from './components/Skills.js';
import Sidebar from './components/Sidebar.js';
import About from './components/About.js';

export default function App() {
  document.body.classList.add("bg-white", "dark:bg-black");
  const resume = () => { alert("I will Upload soon"); };

  return (

    <div className='grid sm:grid-cols-4 gap-4'>
      <Sidebar />
      <div className="h-screen grid-flow-row z-30 items-center mt-32 flex-col col-span-3 ">
        <About/>
        <Skills/>
        

        

      </div>

    </div>

  );

}