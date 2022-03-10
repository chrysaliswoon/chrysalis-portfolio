import welcomeStyle from "./welcome.module.css"
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import ParticlesBackground from "../../Components/Particles/Particles";

export default function WelcomeUser() {
  const navigate = useNavigate();
  const { state } = useLocation();


  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('1 second passed')
      navigate("/loading");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ParticlesBackground />
      <div className={welcomeStyle.intro}>
        <div className={welcomeStyle.welcomeUser}>
            Hi {state}! It's nice to meet you!
        </div>
      </div>
    </div>
  );
}
