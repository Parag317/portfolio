import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About Me</h2>
      <p className="section__subtitle">
        Frontend / React Developer from Pen, Raigad, Maharashtra.
      </p>
      <p className="about__text">
        I am a self-driven frontend developer with a background in Mechanical Engineering (B.E. 2021).
        I enjoy turning designs into functional, responsive web interfaces using React, JavaScript, and modern tools like Vite and Tailwind CSS.
        I’ve built projects like Edusity (an online learning platform UI) and Movie Explorer (a React app using the TMDB API).
      </p>
      <p className="about__text">
        I am actively looking for opportunities as a Frontend / React Developer, including internships, junior developer roles, and entry-level positions.
      </p>
    </section>
  );
}
