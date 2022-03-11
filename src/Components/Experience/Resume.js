import resumeStyle from "./resume.module.css";
import React, { useState } from "react";
import data from "../../Data/resumeData";

export default function Resume() {
  const [description, setDescription] = useState(data[0]);
  const handleClick = (resumeID) => setDescription(resumeID);

  const companies = data.map((companyList) => (
    <li
      className={resumeStyle.jobs}
      onClick={() => handleClick(companyList)}
      style={{ cursor: "pointer" }}
    >
      {companyList.company}
    </li>
  ));

  return (
    <div className="Experience">
      <h1>My Journey</h1>
      <div className="Header">A Brief History of My Work</div>

      <div className={resumeStyle.experienceList}>
        <div style={{ display: "flex" }}>
          <nav className={resumeStyle.navigation}>
            {companies}
          </nav>
          <div className={resumeStyle.experienceDescription}>
            <h5>
              {description.jobTitle} {description.company}
            </h5>
            <p>{description.duration}</p>
            <ul>
              <li>{description.point1}</li>
              <li>{description.point2}</li>
              <li>{description.point3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
