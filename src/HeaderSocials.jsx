import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {SiNetlify} from "react-icons/si";

export default function HeaderSocials() {
    return (
      <div className="header-socials">
        <a
          href="https://www.linkedin.com/in/kateryna-komisarova/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/komisssarova/new-project"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://app.netlify.com/sites/incomparable-dragon-c269f5/overview"
          target="_blank"
          rel="noreferrer"
        >
          <SiNetlify />
        </a>
      </div>
    );
}