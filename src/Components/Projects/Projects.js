import projectStyle from "./projects.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

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
    return <div className={projectStyle.project}>Loading...</div>;
  }

  const renderProject = (project, id) => {
    return (
      <Card
        style={{ width: "20rem" }}
        key={project.id}
        className={projectStyle.card}
      >
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <div className={projectStyle.button}>
          <a href={project.html_url}>
            <Button name="Github" />
          </a>
          <a href={project.homepage}>
            <Button name="Live Site" />
          </a>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="Work">
      <h1>Projects</h1>
      <div className="Header">Explore My Work</div>
      <div className="MainDescription"></div>

      <div className={projectStyle.projectList}>
        {project.map(renderProject)}
      </div>
    </div>
  );
}
