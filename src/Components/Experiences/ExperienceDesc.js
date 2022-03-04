import React from 'react'

export default function Description({details}) {

    return (
        <div style={{ display: "flex" }}>
            {details.map(description => 
                <div key = {description.id}>
                        <h3>{description.jobTitle} {description.company}</h3>
                        <li>{description.duration}</li>
                        <li>{description.point1}</li>
                        <li>{description.point2}</li>
                        <li>{description.point3}</li>
                </div>
            )}
    </div>
    )
}