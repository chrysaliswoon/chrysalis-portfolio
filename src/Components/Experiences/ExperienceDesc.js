import React from 'react'

export default function Description({descriptions}) {

    return (
        <div style={{ display: "flex" }}>
            {descriptions.map(description => (
                <div key = {description.id}>
                        <h4>{description.jobTitle} | {" "} {description.company}</h4>
                        {description.duration} 
                        <li>{description.point1}</li>
                        <li>{description.point2}</li>
                        <li>{description.point3}</li>
                </div>
            ))}
    </div>
    )
}