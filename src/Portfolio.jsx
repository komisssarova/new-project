import React from "react";
import "./portfolio.css";
import IMG1 from "./assets/weather.png";
import IMG2 from "./assets/dictionary.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/komisssarova/weather-app-react",
    netlify: "https://endearing-churros-ff3e12.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dictionary App",
    github: "https://github.com/komisssarova/dictionary-project-app",
    netlify: "https://taupe-stardust-dd3019.netlify.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/komisssarova/weather-app-react",
    netlify: "https://endearing-churros-ff3e12.netlify.app/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, netlify }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={netlify}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netlify
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
