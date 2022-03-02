import React from 'react'
import jobExperience from '../../Data/Data'

export default function Description() {

    return (
        <div style={{display: 'flex'}}>
            {jobExperience().map((experience) => (
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