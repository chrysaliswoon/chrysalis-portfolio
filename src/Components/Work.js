import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Work() {
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState()

  useEffect(() => {
    axios.get("https://api.github.com/users/chrysaliswoon/starred")
    .then(response => {
      setProject(response.data[0])
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
          <h3>{project.name}</h3>

          {project.description}
          <br/>
          <br/>
          <button onClick={project.homepage}>Github</button>
          <button onClick={project.html_url}>Live Site</button>
        </div>
      </div>
    );
  }
  