import Image from './components/Image.js';
import React from 'react';
// import resume from './Neil-Purohit.pdf';
import Theme from './Theme.js';
import Skills from './components/Skills.js';
import blacktwitter from './assets/twitter.png';
import Sidebar from './components/Sidebar.js';

export default function App() {
  document.body.classList.add("bg-white", "dark:bg-black");
  const resume = () => { alert("I will Upload soon"); };

  return (

    <div className='grid sm:grid-cols-4 gap-4'>
      <Sidebar />
      <div className="h-screen grid-flow-row z-30 items-center mt-32 flex-col col-span-3 ">

        <div id='onesec' className='flex flex-col pb-10 border-b border-gray-500'>
          <Image />
          <div className="flex justify-centre">

            <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
              <p className="mt-20 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Shashank Kumar</p>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <div className="flex flex-row text-black dark:text-white gap-3 justify-center">
                  <a href="https://github.com/Shankjbs571" target="_blank" rel="noopener noreferrer">
                    <img src="https://skillicons.dev/icons?i=github" height="30" width="30" alt="Github" />
                  </a>
                  <a href="https://linkedin.com/in/Shankjbs571" target="_blank" rel="noopener noreferrer">
                    <img src="https://skillicons.dev/icons?i=linkedin" height="30" width="30" alt="linkedin" />
                  </a>
                  <a href="https://github.com/Shankjbs571" target="_blank" rel="noopener noreferrer">
                    <img src={blacktwitter} height="30" width="30" alt="Twitter" />
                  </a>
                  <a href="https://github.com/Shankjbs571" target="_blank" rel="noopener noreferrer">
                    <img src="https://skillicons.dev/icons?i=gmail" height="30" width="30" alt="gmail" />
                  </a>
                  <Theme />
                </div>



              </div>
              <div className="inline-grid lg:flex lg:items-center gap-3">
                <p className="font-mono text-sm text-black dark:text-white">Web • Data • AI • Design</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start mx-12 lg:mx-0 mt-10 lg:w-5/6">
            <p className="lg:mb-5 text-center lg:text-left text-md lg:text-xl font-mono font-medium text-black dark:text-white">
              I study Computer Science and Engineering at the University of Lucknow and also Data Science and Applications from IIT Madras.
              I can build things using Python, Django, Flask, SQL as well as NoSQL databases.
              I also enjoy working on ML projects and data science-related stuff. Additionally, I was a Django intern at CRIS Indian Railways. <br />
              I have worked with modern technologies including Next.JS, React, Material UI, & Typescript (for frontend), Python, Flask & Sanic (for backend), Solr, Oracle SQL, Elasticsearch, & Dremio (for indexing and storing data), and Git & Jenkins (for version control and CI/CD).

              In a parallel world, I hustle and follow my passion for ML research. I have interests in NLP, HCI, & Social Computing. To this end I have done extensive work on the use of LLMs in moderating hate speech on social media platforms.</p>
            {/* <i>Data & Analytics Summer Intern</i>, and I am the 
                <i>Founder</i> of 
                <a className="hover:font-semibold" href="https://prospectiveprogramming.org"><u>ProspectiveProgramming</u></a> and 
                <i>Co-Founder</i> of <a className="hover:font-semibold" href="https://futurepearstudios.co"><u>FuturePearStudios</u></a>. 
                Currently, I am dual-enrolled in <i>CS 331: Data Structures and Algorithms</i> at the Illinois Institute of Technology for the Spring 2024 term.</p> */}
          </div>
          
        </div>

        <div id='twosec' className='flex flex-col pt-10 pb-10 '>

            <div className="flex justify-centre">

              <div className="lg:mt-0 inline-grid text-center lg:text-left w-full gap-3 lg:gap-1">
                <p className="mt-10 md:mt-0 text-6xl font-mono font-bold text-black dark:text-white">Skills</p>
                <div className="inline-grid lg:flex lg:items-center gap-3">
                  <div className="flex flex-row  gap-3 justify-center sm:justify-start w-full ">
                    
                      <img src="https://skillicons.dev/icons?i=django" height="40" width="40" alt="Github" />
                      <img src="https://skillicons.dev/icons?i=flask" height="40" width="40" alt="Github" />
                      <img src="https://skillicons.dev/icons?i=gcp" height="40" width="40" alt="Github" />
                      <img src="https://skillicons.dev/icons?i=docker" height="40" width="40" alt="linkedin" />
                      <img src="https://skillicons.dev/icons?i=react" height="40" width="40" alt="Twitter" />
                      <img src="https://skillicons.dev/icons?i=py" height="40" width="40" alt="gmail" />
                      <img src="https://skillicons.dev/icons?i=vue" height="40" width="40" alt="gmail" />
                      <img src="https://skillicons.dev/icons?i=postman" height="40" width="40" alt="gmail" />
                      
                    
                  </div>

                    

                </div>

              </div>
            </div>

          </div>

      </div>

    </div>

  );

}