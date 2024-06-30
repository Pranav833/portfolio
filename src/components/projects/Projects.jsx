import React, { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (selectedCategory === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === selectedCategory
      );
      setProjects(newProjects);
    }
  }, [selectedCategory]);

  const handleClick = (index, categoryName) => {
    setSelectedCategory(categoryName);
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            className={`work__item ${
              activeIndex === index ? "active-work" : ""
            }`}
            onClick={() => handleClick(index, item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((project) => (
          <ProjectItem key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
