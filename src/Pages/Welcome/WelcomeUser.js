import "./WelcomeUser.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function WelcomeUser() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('1 second passed')
      navigate("/loading");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="Intro">
        <div className="Header">
          <blockquote className="blockquote text-center text-success">
            <p>Hi {state}! It's nice to meet you!</p>
          </blockquote>
        </div>
      </div>
  );
}
