import React from "react";
import "./footer.css";

export default function Footer() {
    return (
      <div className="App-footer">
        <small>
          Coded by{" "}
          <a href="https://www.linkedin.com/in/kateryna-komisarova/">
            Kateryna Komisarova
          </a>{" "}
          and hosted on{" "}
          <a href="https://github.com/komisssarova/new-project">GitHub</a> and{" "}
          <a href="https://astonishing-heliotrope-50618a.netlify.app/">
            Netlify
          </a>
        </small>
      </div>
    );
}