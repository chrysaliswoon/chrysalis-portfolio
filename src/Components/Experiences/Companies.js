import React from "react";
import jobExperience from "../../Data/Data";

export default function Companies() {

  function handleClick(e) {
    e.preventDefault();

    // console.log(experiences);
  }

  return (
    <div >
      {jobExperience().map((experience) => (
        <li key={experience.id}>
          <a onClick={handleClick} style={{ cursor: "pointer" }}>
            {experience.company}
          </a>
        </li>
      ))}
    </div>
  );
}
