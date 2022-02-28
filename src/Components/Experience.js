import {Link} from 'react-router-dom'
import jobExperience from './Data'

export default function Experience() {
  let experiences = jobExperience()

    return (
      <div className="Experience">
          <h1>My Journey</h1>
        <div className="Header">
          <p>A Brief History of My Work</p>
        </div>
        <div style={{display: 'flex'}}>
            <nav style={{
                borderRight: 'solid 1px', 
                padding: '1rem'
            }}
            >
                {experiences.map((experience) => (
                    <Link style={{display: 'block', margin: '1rem 0'}}
                    to={`#Experience`}
                    key={experience.id}
                >
                    {experience.company}
                </Link>
                ))}
            </nav>
        </div>
      </div>
    );
  }
  