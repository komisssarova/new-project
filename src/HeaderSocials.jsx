import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/kateryna-komisarova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/komisssarova/new-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://app.netlify.com/sites/incomparable-dragon-c269f5/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiNetlify />
      </a>
    </div>
  );
};

export default HeaderSocials
