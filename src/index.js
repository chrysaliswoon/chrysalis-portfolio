import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import LoadingPage from './Pages/Loader/Loader'
import Introduction from "./Pages/Intro/Intro";
import WelcomeUser from "./Pages/Welcome/welcome";
import ParticlesBackground from "./Components/Particles/Particles";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ParticlesBackground > <Introduction /> </ParticlesBackground>}  />
        <Route path='/welcome' element={<WelcomeUser />} />
        <Route path='/loading' element={<LoadingPage />} />
        <Route path='/home' element={ <HomePage />}/>
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
