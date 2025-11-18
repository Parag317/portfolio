import React from "react";
import "./Skills.css";

const SKILLS = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Vite",
  "Tailwind CSS (basic)",
  "Responsive Design",
  "Git & GitHub",
  "SQL (basic)",
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">
        Technologies and tools I use to build frontend applications.
      </p>
      <div className="skills__grid">
        {SKILLS.map((skill) => (
          <span key={skill} className="skills__pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
