import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Kateryna Komisarova</h1>
        <h5 className="text-light">Junior Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        
          <img src="mecv.jpg" className="kate" alt="Kateryna portrait" />
        
        <a href="#contact" className="scroll-down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
