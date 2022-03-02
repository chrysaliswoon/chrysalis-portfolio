import "./Components/Website.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Button from "./Components/Button";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/About";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

export default function Website() {
  return (
    // Top Navigation Bar Section //
    <div className="HomePage">
      <div className="NavBar">
        <AnchorLink href="#About">
          <Button name="About" />
        </AnchorLink>
        <AnchorLink href="#Experience">
          <Button name="Experience" />
        </AnchorLink>
        <AnchorLink href="#Work">
          <Button name="Work" />
        </AnchorLink>
        <AnchorLink href="#Contact">
          <Button name="Contact" />
        </AnchorLink>
      </div>

      {/* Main Page Section */}
      <div className="MainPage">
        <section id="Introduction">
          <HomePage />
          <br />
          <Button name="Connect!" />
        </section>
      </div>

      {/* About Me Page Section */}
      <div className="AboutMePage">
        <section id="About">
          <AboutMe />
        </section>
      </div>

      {/* My Experiences Page Section */}
      <div className="ExperiencePage">
        <section id="Experience">
          <Experience />
        </section>
      </div>

      {/* My Projects Page Section */}
      <div className="ProjectPage">
        <section id="Work">
          <Work />
        </section>
      </div>

      {/* Contact Page Section  */}
      <div className="ContactPage">
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}
