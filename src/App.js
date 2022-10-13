import React from "react";
import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";




function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          
        </header>

        <div class="row justify-content-center">
            <AboutMe />
            <Projects />
          
          
          
          <footer className="App-footer">
            <small>
              Coded by{" "}
              <a href="https://www.linkedin.com/in/kateryna-komisarova/">
                Kateryna Komisarova
              </a>{" "}
              and hosted on{" "}
              <a href="https://github.com/komisssarova/dictionary-project-app">
                GitHub
              </a>{" "}
              and{" "}
              <a href="https://taupe-stardust-dd3019.netlify.app/">Netlify</a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
