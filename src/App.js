import Image from './components/Image.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home.js';
import Update from './Pages/Update.js';
import Terminal from './components/Terminal.js';

export default function App() {
  document.body.classList.add("bg-white", "dark:bg-black");
  const resume = () => { alert("I will Upload soon") };

  return (
    <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<Update />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </div>
  </Router>

  );

}