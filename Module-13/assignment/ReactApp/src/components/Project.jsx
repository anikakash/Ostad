import React, { useEffect, useState } from "react";
import "../components/Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch your GitHub projects using the GitHub API.
    fetch("https://api.github.com/users/anikakash/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="project">
      <h1>My Projects on GitHub</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
