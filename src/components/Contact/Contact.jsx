import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="section__subtitle">
        Feel free to reach out for opportunities, collaborations, or questions.
      </p>

      <div className="contact__box">
        <p className="contact__item">
          <span>Email:</span> <a href="mailto:parag4398@gmail.com">parag4398@gmail.com</a>
        </p>
        <p className="contact__item">
          <span>Phone:</span> <a href="tel:+918087633212">+91 80876 33212</a>
        </p>
        <p className="contact__item">
          <span>GitHub:</span>{" "}
          <a
            href="https://github.com/Parag317"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Parag317
          </a>
        </p>
      </div>

      <p className="contact__footer">© {new Date().getFullYear()} Parag Sunil Patil</p>
    </section>
  );
}
