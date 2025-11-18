import React from "react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Movie Explorer",
    description:
      "React app to discover trending movies and search by title using TMDB API. Includes movie details modal and responsive card layout.",
    tech: ["React", "Vite", "TMDB API", "CSS"],
    live: "https://movie-explorer-pjzihp514-parags-projects-a645e34e.vercel.app",
    code: "https://github.com/Parag317/movie-explorer",
  },
  {
    title: "Edusity",
    description:
      "Responsive UI for an online learning platform built with React and Vite, focused on clean layout and reusable components.",
    tech: ["React", "Vite", "CSS"],
    live: "https://edusity-7p8kqv0ki-parags-projects-a645e34e.vercel.app",
    code: "https://github.com/Parag317/edusity",
  },
];


export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        A selection of my recent frontend work.
      </p>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <div key={project.title} className="projects__card">
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-desc">{project.description}</p>
            <div className="projects__tags">
              {project.tech.map((tag) => (
                <span key={tag} className="projects__tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="projects__links">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="projects__link projects__link--secondary"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
