import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage/homePage";
import Welcome from './Pages/Intro/Intro'
import AboutMe from "./Components/AboutMe/About";
import Experience from "./Components/Experiences/Experience";
import Work from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='welcome' element={<Welcome />} />
        <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutMe />} />
          <Route path='experience' element={<Experience />}>
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<main style={{padding: '1rem'}}>
            <p>404: Not Found</p>
            </main>
            }
            />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
