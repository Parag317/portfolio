import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">Parag</div>
        <nav className="header__nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
