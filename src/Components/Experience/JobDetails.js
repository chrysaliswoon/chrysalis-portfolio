import jobStyle from "./job.module.css"
import experience from "../../Data/resumeData";
import React from "react";

export default function companyList() {
  return (
    <div className={jobStyle.jobList}>
      {experience.map((experience, index) => (
        <div key={index}>
          <h5>
            {experience.jobTitle} {experience.company}
          </h5>
          <p>{experience.duration}</p>
          <ul>
            <li>{experience.point1}</li>
            <li>{experience.point2}</li>
            <li>{experience.point3}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
