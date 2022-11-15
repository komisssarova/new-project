import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Let's get in touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <a href="mailto:komisssarova.uk@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <AiFillLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/kateryna-komisarova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </article>
          <article className="contact-option">
            <AiOutlineInstagram className="contact-option-icon" />
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/komisssarova/" target="_blank" rel="noopener noreferrer">
              Get in touch
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
