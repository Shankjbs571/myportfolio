import { Moon, Sun } from 'lucide-react';
import {useState, useEffect } from 'react';
import React from 'react';
import Terminal from './components/Terminal';
import { Link } from 'react-router-dom';


export default function Theme() {
    const [ theme, setTheme ] = useState(null);
    var icon = <Moon color="black" size={20}/>;
 
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("light");
            return;
        }
        setTheme("dark");
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            return;
        }
        document.documentElement.classList.remove("dark");
    }, [ theme ]);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light": "dark");
    };

    if (theme === "dark") {
        icon = <Sun color="white" size={20}/>;
    }

    return (
        <div className="flex flex-row mt-3 absolute top-3 right-10">
            <Link to="/terminal">
            <button  className="block focus:outline-none font-medium transition duration-700 rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                <svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0 exTBfn" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.749.749 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L5.44 8 3.72 6.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53Zm1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5Z"></path></svg>
            </button>
            </Link>

            <button onClick={handleTheme}>
                {icon}
            </button>
        </div>
    );
}