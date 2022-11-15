import React from "react";
import "./about.css";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="words-me">
      <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src="cvpicture.jpg" alt="img of kateryna"></img>
          </div>
        </div>

        <div className="about-contant">
          <div className="about-cards">
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>

          <p>
            A determined Junior Front-End Developer with a passion for clean
            code and creative solutions. Proficient in React, ES6+, HTML/CSS
            with a solid knowledge base of utilising Bootstrap and Visual Code.
            In search of an Entry-level Front-End Developer position with the
            opportunity to work and grow within an amazing team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
