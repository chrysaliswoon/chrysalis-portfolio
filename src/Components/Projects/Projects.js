import "./Projects.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Card from "react-bootstrap/Card";

export default function Work() {
  const [isLoading, setLoading] = useState(true);
  const [project, setProject] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/chrysaliswoon/starred")
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="Work">
      <h1>Projects</h1>
      <div className="Header">Explore My Work</div>

      <div className="MainDescription">
        <div>
          <Card style={{ width: "30rem", display: 'flex', flexDirection: 'row'}}>
            {project.map((project) => (
              <li key={project.id}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.html_url}>
                    <Button name="Github" />
                  </a>
                  <a href={project.homepage}>
                    <Button name="Live Site" />
                  </a>
                </Card.Body>
              </li>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
