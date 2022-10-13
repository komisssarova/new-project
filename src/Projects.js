import React from "react";
import "./App";
import "./Projects.css"

export default function Projects() {
  return (
    <div className="Projects">
      <div className="row justify-content-between">
        <h3>Check out my projects</h3>
        
        <div className="col-4">
          <img src="weather.png" alt="" />
          <p>Weather App built with React</p>
          <a
            href="https://endearing-churros-ff3e12.netlify.app/"
            className="link-secondary"
          >
            Learn more
          </a>
        </div>
        <div className="col-4">
          <img src="dictionary.png" alt="" />
          <p>
            Dictionary App built with React
          </p>
          <a
            href="https://taupe-stardust-dd3019.netlify.app/"
            className="link-secondary"
          >
            Learn more
          </a>
          </div>
        </div>
    </div>
  );
}
