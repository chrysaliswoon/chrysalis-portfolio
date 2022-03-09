import "./Intro.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "../../Components/Form/Form";
import ParticlesBackground from "../../Components/Particles/Particles";

export default function Introduction() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <div className="bg text-center">
      {/* <ParticlesBackground /> */}
      <div className="centered">
        <h1 className="firstLine">WELCOME!</h1>
        <p className="secondLine">
          Glad you could stop by! How do I address you?
        </p>
        <div className="form">
          <Form name={name} setName={setName} />
          <button
            className="btn"
            onClick={() => navigate("/welcome", { state: name })}
          >
            Submit
          </button>
        </div>
        <div className="disclaimer">
            This information will not be recorded, and is for entertainment
            purposes.
        </div>
      </div>
    </div>
  );
}
