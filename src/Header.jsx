import React from "react";
import CTA from "./CTA";
import "./header.css";
import "./index.css";

export default function Header() {
    return (
      <header>
        <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Kateryna Komisarova</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
          <div className="me">
            <img src="cvpicture.jpg" alt="Kateryna portrait" />
          </div>
          <a href="#contact" className="scroll-down">Scroll down</a>
        </div>
      </header>
    );
}