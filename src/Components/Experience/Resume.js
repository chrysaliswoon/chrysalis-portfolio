import resumeStyle from "./resume.module.css"
import React, { useState } from "react";
import data from "../../Data/resumeData";
import Experience from "./Experience";
import JobDetails from "../Experience/JobDetails";

export default function Resume() {
  const [company, setCompany] = useState(data);
  const [descriptionID, setDescriptionID] = useState(data[0]);

  const update = (details) => {
    setDescriptionID(details);
    console.log("clicked")
  };

  return (
    <div className="Experience">
    <h1>My Journey</h1>
    <div className="Header">A Brief History of My Work</div>
    <div className={resumeStyle.experienceList}>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
          }}
        >
          <Experience experience = {company} handleClick={update}/>
        </nav>
        <div className={resumeStyle.experienceDescription}>
        <JobDetails experience = {descriptionID} />
        </div>
      </div>
      </div>
    </div>
  );
}
