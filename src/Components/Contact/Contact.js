import "./Contact.css";
import React from "react";
import ContactForm from "./ContactForm";
import social from '../../Data/contactData'

export default function Contact() {
  return (
    <div className="Contact">
      <h1 className="ContactTitle">Get In Touch</h1>
      <div className="SocialDescription">
        <p>Follow me on my social media or drop me an email!</p>
      </div>
      <ul className="socialList">
        <li className="socialIcons">
          <a href="https://www.linkedin.com/in/chrysalis-woon-38376198/">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/linkedin.png?raw=true"
              height= "50px"
              width= "50px"
              alt="LinkedIn Logo"
            ></img>
          </a>
        </li>
        <li className="socialIcons">
          <a href="https://twitter.com/chrysaliswoon">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/twitter.png?raw=true"
              height= "50px"
              width= "50px"
              alt="Twitter Logo"
            ></img>
          </a>
        </li>
        <li className="socialIcons">
          <a href="https://github.com/chrysaliswoon">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/github.png?raw=true"
              height= "50px"
              width= "50px"
              alt="Github Logo"
            ></img>
          </a>
        </li>
        <li className="socialIcons">
          <a href="mailto:chrysaliswoon@gmail.com">
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/email.png?raw=true"
              height= "50px"
              width= "50px"
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
