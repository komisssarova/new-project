import React from "react";
import "./App";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="content-container container">
      <div className="content">
        <h1 className="mb-5">Let's get in touch!</h1>
        <div className="row">
          <div className="col-md-8">
            <form
              action="https://formspree.io/f/mwkalajy"
              method="POST"
              className="border p-2 rounded mb-2"
            >
              <div className="mb-2">
                <label className="form-label"> Your email: </label>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  required
                  autofocus
                />
              </div>
              <div className="mb-2">
                <label className="form-label"> Your message: </label>
                <textarea
                  name="message"
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-branding">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <h3>Email</h3>
            <p>
              <a href="mailto:komisssarova.uk@gmail.com">
                {" "}
                komisssarova.uk@gmail.com{" "}
              </a>
            </p>
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/kateryna-komisarova/"
                target="_blank"
              >
                @kateryna-komisarova
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
