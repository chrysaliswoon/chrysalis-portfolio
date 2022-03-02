import "./homePage.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Button from "../../Components/Button/Button";
import HomePage from "../../Components/Introduction/Introduction";
import AboutMe from "../../Components/AboutMe/About";
import Experience from "../../Components/Experiences/Experience";
import Work from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import NavBar from "../../Components/NavigationBar/NavBar";

export default function Website() {
  return (
    // Top Navigation Bar Section //
    <div className="HomePage">
        <NavBar />

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
