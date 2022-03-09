import "./Experience.css";
import React, { useState } from "react";
import { jobExperience, intialJob } from "../../Data/Data";
import Description from "./ExperienceDesc";
import Companies from "./Companies";

export default function Experiences() {
  // let initialDescription = jobExperience[0]
  // console.log(initialDescription)

  const [company, setCompany] = useState(jobExperience);
  const [description, setDescription] = useState(intialJob);

  const update = (details) => {
    setDescription([description, details]);
  };

  return (
    <div className="Experience">
      <h1>My Journey</h1>
      <div className="Header">A Brief History of My Work</div>
      <div className="experienceList">
        <div style={{ display: "flex" }}>
          <nav
            style={{
              borderRight: "solid 1px",
            }}
          >
              <Companies experiences={company} handleClick={update} />
            </nav>
            <div className="experienceDescription">
            <Description details={description} />
            </div>
          </div>
      </div>
    </div>
  );
}
