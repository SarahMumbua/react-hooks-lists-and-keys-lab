import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectData = projects.map(({ name, about, technologies}) => {
    return { name, about, technologies };
  });

  console.log(projectData);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
