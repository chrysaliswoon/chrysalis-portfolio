import socialStyle from "./contact.module.css"
import React from "react";
import ContactForm from "./ContactForm";
import social from "../../Data/contactData";

export default function Contact() {

  return (
    <div className="Contact">
      <h1 className={socialStyle.contactTitle}>Get In Touch</h1>
      <div className={socialStyle.description}>
        <p>Follow me on my social media or drop me an email!</p>
      </div>
      <ul className={socialStyle.list}>
        {social.map((social) => (
          <li className={socialStyle.icons}>
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
      {/* <div className={socialStyle.form}>
        <ContactForm formSlug="chrysaliswoon" />
      </div> */}
    </div>
  );
}
