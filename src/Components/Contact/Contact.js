import "./Contact.css";
import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <div className="MainDescription">
        <p>Follow me on my social media or drop me an email!</p>
      </div>
      <ul className="SocialIcons">
        <li className="socialIcons">
          <a href="https://www.linkedin.com/in/chrysalis-woon-38376198/">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/linkedin.png?raw=true"
              alt="LinkedIn Logo"
            ></img>
          </a>
        </li>
        <li className="socialIcons">
          <a href="https://twitter.com/chrysaliswoon">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/twitter.png?raw=true"
              alt="Twitter Logo"
            ></img>
          </a>
        </li>
        <li className="socialIcons">
          <a href="https://github.com/chrysaliswoon">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/github.png?raw=true"
              alt="Github Logo"
            ></img>
          </a>
        </li>
        <li className="socialIcons">
          <a href="mailto:chrysaliswoon@gmail.com">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/email.png?raw=true"
              alt="Email Logo"
            ></img>
          </a>
        </li>
      </ul>
      <div className="ContactForm">
        <ContactForm formSlug="chrysaliswoon" />
      </div>
    </div>
  );
}
