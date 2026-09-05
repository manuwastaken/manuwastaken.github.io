import React, { useState } from "react";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import { myProjects } from "../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="c-space section-spacing" id="projects">
      {/* Heading rendered once */}
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-lavender">
          Selected Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
      </div>

      {/* List of projects */}
      <div className="flex flex-col gap-4">
        {myProjects.map((project, index) => (
          <Project
            key={project.id || project.title || index}
            {...project}
            onOpenDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal only rendered when selected */}
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;