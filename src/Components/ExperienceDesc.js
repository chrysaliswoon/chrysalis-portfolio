import React from 'react'
import jobExperience from './Data'

export default function Description() {
    let experiences = jobExperience()

    function handleClick(e) {
        e.preventDefault()
        console.log(experiences)
    }

    return (
        <div style={{display: 'flex'}}>
            {experiences.map((experience) => (
                <div key = {experience.id}>
                        {experience.jobTitle} | {" "} {experience.company}
                        <br />
                        {experience.duration} 
                        <li>{experience.point1}</li>
                        <li>{experience.point2}</li>
                        <li>{experience.point3}</li>
                </div>
            ))}
    </div>
    )
}