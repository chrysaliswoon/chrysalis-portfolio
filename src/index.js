import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import Welcome from './Pages/Welcome/Welcome'
import Introduction from "./Pages/Intro/Intro";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='introduction' element={<Introduction />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='/' element={<HomePage />} />
          <Route path="*" element={<main style={{padding: '1rem'}}>
            <p>404: Not Found</p>
            </main>
            }
            />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
