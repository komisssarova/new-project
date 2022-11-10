import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src="weather.png" alt="Weather App Pic" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/komisssarova/weather-app-react"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://endearing-churros-ff3e12.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Netlify
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src="dictionary.png" alt="Dictionary App Pic" />
          </div>
          <h3>Dictionary App</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/komisssarova/dictionary-project-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://taupe-stardust-dd3019.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Netlify
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src="weather.png" alt="Weather App Pic" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/komisssarova/weather-app-react"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://endearing-churros-ff3e12.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Netlify
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
