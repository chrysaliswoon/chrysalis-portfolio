import homeStyle from "./homePage.module.css";
import About from "../../Components/AboutMe/About";
import Experience from "../../Components/Experiences/Experience";
import Work from "../../Components/Projects/projects";
import Contact from "../../Components/Contact/Contact";
import NavBar from "../../Components/NavigationBar/navigation";
import Introduction from "../../Components/Introduction/Introduction";
import Footer from "../../Components/Footer/Footer";

export default function Website() {
  return (
    <div>
      <div className={homeStyle.background}>
        <div className={homeStyle.navigation}>
          <nav id="Navigation">
            <NavBar />
          </nav>
        </div>
        <div className={homeStyle.introduction}>
          <section id="Introduction">
            <Introduction />
          </section>
        </div>
        <div className={homeStyle.aboutMe}>
          <section id="AboutMe">
            <About />
          </section>
        </div>
        <div className={homeStyle.experience}>
          <section id="Experience">
            <Experience />
          </section>
        </div>
        <div className={homeStyle.work}>
          <section id="Work">
            <Work />
          </section>
        </div>
        <div className={homeStyle.contact}>
          <section id="Contact">
            <Contact />
          </section>
        </div>
        <section id={homeStyle.footer}>
          <Footer />
        </section>
      </div>
    </div>
  );
}
