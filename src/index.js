import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Home";
import Welcome from './Components/Welcome'
import AboutMe from "./Components/About";
import Experience from "./Routes/Experience";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='home' element={<HomePage />} />
        <Route path='about' element={<AboutMe />} />
        <Route path='experience' element={<Experience />} />
        <Route path='work' element={<Work />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
