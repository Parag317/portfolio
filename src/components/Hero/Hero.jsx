import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="section hero" id="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Hi, I’m Parag 👋</p>
        <h1 className="hero__title">
          Frontend Developer{" "}
          <span className="hero__title-accent">& React Enthusiast</span>
        </h1>
        <p className="hero__subtitle">
          I build responsive, user-friendly web interfaces using React, JavaScript, and modern web tools.
          Currently focusing on real-world projects like Edusity and Movie Explorer.
        </p>
        <div className="hero__actions">
          <a
            href="#projects"
            className="hero__button hero__button--primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="hero__button hero__button--secondary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
