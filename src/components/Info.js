import React from "react";
import Image from "./Image.js";
import blacktwitter from '../assets/twitter.png';
import Theme from '../Theme.js';
import WeeklyContributionsLineChart from "./utils/WeeklyContributionsLineChart.js";
// vfgf
export default function About(){

    return(
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
                {/* I am currently pursuing Computer Science and Engineering at the University of Lucknow and Data Science and Applications from IIT Madras. My skills include building applications using Python, Django, Flask, SQL, and NoSQL databases. I have a keen interest in working on ML projects and other data science-related tasks. Moreover, I have experience as a Django intern at CRIS Indian Railways. I also like to build and learn core Computer Science projects using the C language, such as Linux applications or system call implementations, to understand how low-level concepts really work. In addition, I am passionate about understanding ML research papers and implementing them, including projects related to NLP.
              </p> */}
              Hey! I'm @shankjbs175 (Shashank Kumar) 👋
              <br/>
I'm a Computer Science Student. <br/>

I have been building APIs and tools 🚀 <bbr/>

I like to build things with Machine Learning, Django/flask, SQL and NoSQL databases, Docker, Python, TypeScript (and JavaScript), modern backend APIs, and modern frontend frameworks. 🤖

I'm currently dedicating a high percentage of my time to ML and my other projects. At the same time, I'm also looking for Internship or full-time opportunities . If you would like to have my help with your Projects, feel free to contact me. 🤓
<br/>
You can find me on:
<br/>
Twitter as @Shankjbs175 <br/>
GitHub as @Shankjbs571<br/>
LinkedIn<br/>
Dev<br/>
</p>
              {/* <i>Data & Analytics Summer Intern</i>, and I am the 
                <i>Founder</i> of 
                <a className="hover:font-semibold" href="https://prospectiveprogramming.org"><u>ProspectiveProgramming</u></a> and 
                <i>Co-Founder</i> of <a className="hover:font-semibold" href="https://futurepearstudios.co"><u>FuturePearStudios</u></a>. 
                Currently, I am dual-enrolled in <i>CS 331: Data Structures and Algorithms</i> at the Illinois Institute of Technology for the Spring 2024 term.</p> */}
          </div>
          
        </div>

    );

}