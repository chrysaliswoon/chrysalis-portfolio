import React, {useState, useEffect} from 'react'
import axios from "axios"
import Button from '../Button/Button'

export default function Work() {
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState()

  useEffect(() => {
    axios.get("https://api.github.com/users/chrysaliswoon/starred")
    .then(response => {
      setProject(response.data)
      setLoading(false)
    })
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>
  }

    return (
      <div className="Work">
          <h1>Projects</h1>
        <div className="Header">
          <p>Explore My Work</p>
        </div>

        <div className="MainDescription">
        
          <div>
            {project.map(project => (
              <li key={project.id}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.html_url}><Button name="Github"/></a>
                  <a href={project.homepage}><Button name="Live Site"/></a>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
  