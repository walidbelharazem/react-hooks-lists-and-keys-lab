import React from "react";
import ProjectItem from "./ProjectItem";
//import user from "../data/user";
function ProjectList({ projects }) {
  console.log(projects);
  const prjt = projects.map((project, index) =>{
   return <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={index} />
});
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{prjt}</div>
    </div>
  );
}

export default ProjectList;
