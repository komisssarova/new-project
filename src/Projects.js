import React from "react";
import "./App";
import "./Projects.css"

export default function Projects() {
  return (
    <div className="Projects">
      <div className="row justify-content-between">
        <h1>Check out my projects</h1>
        
        <div className="col-4">
          <img src="weather.png" alt="" />
          <a
            href="https://endearing-churros-ff3e12.netlify.app/"
            className="link-secondary"
          >
            Weather App
          </a>
        </div>
        <div className="col-4">
          <img src="dictionary.png" alt="" />
          <a
            href="https://taupe-stardust-dd3019.netlify.app/"
            className="link-secondary"
          >
            Dictionary App
          </a>
          </div>
        </div>
    </div>
  );
}
