import expStyle from "./experience.module.css"
import experience from "../../Data/resumeData";
import React from "react";

export default function companyList ({ handleClick }) {
  return (
    <div className={expStyle.companyList}>
      {experience.map((experience, index) => (
        <div key={index}>
          <a
            className="jobs"
            onClick={() => handleClick(experience)}
            style={{ cursor: "pointer" }}
          >
            {experience.company}
          </a>
        </div>
      ))}
    </div>
  );
}
