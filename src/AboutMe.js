import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      
      <div className="row justify-content-between">
      <div className="hello">
      <h1>Hi 👋</h1>
      <h2>My name is Kateryna Komisarova</h2>
      </div>
        <div className="col-4">
          <img src="cvpicture.jpg" alt="" />
        </div>
        <div className="col-4">
          <p className="text">
            A determined Junior Front-End Developer with a passion for clean
            code and creative solutions. Proficient in React, ES6+, HTML/CSS
            with a solid knowledge base of utilising Bootstrap and Visual Code.
            In search of an Entry-level Front-End Developer position with the
            opportunity to work and grow within an amazing team.
          </p>
           
        </div>
      </div>
    </div>
  );
}
