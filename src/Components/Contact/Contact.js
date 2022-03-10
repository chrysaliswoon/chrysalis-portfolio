import "./Contact.css";
import React from "react";
import ContactForm from "./ContactForm";
import social from "../../Data/contactData";

export default function Contact() {

  return (
    <div className="Contact">
      <h1 className="ContactTitle">Get In Touch</h1>
      <div className="SocialDescription">
        <p>Follow me on my social media or drop me an email!</p>
      </div>
      <ul className="socialList">
        {social.map((social) => (
          <li className="socialIcons">
            <a href={social.url}>
            <img
              src={social.img}
              height= {social.height}
              width= {social.width}
              alt={social.alt}
            ></img>
          </a>
          </li>
        ))}
      </ul>
      <div className="ContactForm">
        <ContactForm formSlug="chrysaliswoon" />
      </div>
    </div>
  );
}
