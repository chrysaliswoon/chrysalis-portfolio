import "./Companies.css"
import React from 'react'

export default function Companies({experiences, handleClick}) {


  return (
    <div className="companyList">
      {experiences.map(experience => 
        <li key={experience.id}>
          <a className="jobs" onClick={() => handleClick(experience)} style={{ cursor: "pointer" }}>
            {experience.company}
          </a>
        </li>
      )}
    </div>
  );
}
