import React from "react";
import jobExperience from "./Data";

export default function Companies() {
  let experiences = jobExperience();

  function handleClick(e) {
    e.preventDefault();
    console.log(experiences);
  }

  return (
    <div >
      {experiences.map((experience) => (
        <li key={experience.id}>
          <a onClick={handleClick} style={{ cursor: "pointer" }}>
            {experience.company}
          </a>
        </li>
      ))}
    </div>
  );
}
