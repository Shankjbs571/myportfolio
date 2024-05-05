import { Moon, Sun } from 'lucide-react';
import {useState, useEffect } from 'react';
import React from 'react';


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
        <div className="mt-3 absolute top-3 right-10">
            <button onClick={handleTheme}>
                {icon}
            </button>
        </div>
    );
}