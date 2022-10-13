import React from "react";
import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";




function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <div class="row justify-content-center">
          <AboutMe />
          <Projects />
          <ContactMe />

          <footer className="App-footer">
            <small>
              Coded by{" "}
              <a href="https://www.linkedin.com/in/kateryna-komisarova/">
                Kateryna Komisarova
              </a>{" "}
              and hosted on{" "}
              <a href="https://github.com/komisssarova/new-project">GitHub</a>{" "}
              and{" "}
              <a href="https://astonishing-heliotrope-50618a.netlify.app/">
                Netlify
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
