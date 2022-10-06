import React from "react";
import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          
              <div className="container-container container bg-light">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="./App.js">
                    Home
                  </a>
                  
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        
                        <a className="nav-link" href="./App.js">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./Projects.js">
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./Contact.js">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
             
        </header>

        <div class="row justify-content-center">
          <main>
            <AboutMe />
            <Projects />
          </main>
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
