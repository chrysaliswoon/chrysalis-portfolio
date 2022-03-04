import "./Companies.css"
import React from 'react'

export default function Companies({experiences, handleClick}) {

  // function handleClick() {
  //   console.log("Clicked");
  // }

  return (
    <div >
      {experiences.map(experience => 
        <li key={experience.id}>
          <a onClick={() => handleClick(experience)} style={{ cursor: "pointer" }}>
            <p>{experience.company}</p>
          </a>
        </li>
      )}
    </div>
  );
}
