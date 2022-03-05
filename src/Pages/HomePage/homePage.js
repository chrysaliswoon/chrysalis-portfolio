import "./homePage.css";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Experience from "../../Components/Experiences/Experience";
import Work from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import NavBar from "../../Components/NavigationBar/NavBar";
import Introduction from "../../Components/Introduction/Introduction";

export default function Website() {
  console.log(process.env.REACT_APP_LOAD_INTRO)

  
  return (
    // Top Navigation Bar Section //
    <div className="HomePage">
      <section id="HomePage">
        <NavBar />
      </section>

      {/* Main Page Section */}
      <div className="MainPage">
        <section id="Introduction">
          <Introduction />
        </section>
      </div>

      {/* About Me Page Section */}
      <section id="AboutMe">
        <AboutMe />
      </section>

      {/* My Experiences Page Section */}
      <section id="Experience">
        <Experience />
      </section>

      {/* My Projects Page Section */}
      <section id="Projects">
        <Work />
      </section>

      {/* Contact Page Section  */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
