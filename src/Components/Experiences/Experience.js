import "./Experience.css";
import React, {useState} from "react";
import jobExperience from "../../Data/Data";
import Description from "./ExperienceDesc";
import Companies from "./Companies"

export default function Experiences() {
  const [company, setCompany] = useState(jobExperience)
  const [description, setDescription] = useState(jobExperience)

  const update = details => {
    setDescription([description, details])
  }

  return (
    <div className="Experience">
      <h1>My Journey</h1>
      <div className="Header">
        <p>A Brief History of My Work</p>
      </div>

      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1px",
          }}
        >
          <Companies experiences = {company} handleClick={update}/>
        </nav>
        <Description descriptions = {description}/>
      </div>
    </div>
  );
}
