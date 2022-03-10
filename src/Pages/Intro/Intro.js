import introStyle from "./Intro.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "../../Components/Form/Form";
import ParticlesBackground from "../../Components/Particles/Particles";

export default function Introduction() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <div className={introStyle.design}>
      <h1 className={introStyle.welcome}>WELCOME!</h1>
      <p className={introStyle.description}>
        Glad you could stop by! How do I address you?
      </p>
      <div className={introStyle.form}>
        <Form name={name} setName={setName} />
        <button
          className={introStyle.button}
          // className="btn"
          onClick={() => navigate("/welcome", { state: name })}
        >
          Submit
        </button>
      </div>
      <div className={introStyle.disclaimer}>
        This information will not be recorded, and is for entertainment
        purposes.
      </div>
    </div>
  );
}
