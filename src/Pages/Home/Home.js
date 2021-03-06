import homeStyle from "./home.module.css";
import About from "../../Components/AboutMe/About";
import Work from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Introduction from "../../Components/Introduction/Introduction";
import Footer from "../../Components/Footer/Footer";
import Resume from "../../Components/Experience/Resume";
import Navigation from "../../Components/Navigation/Navigation";

export default function Website() {
  return (
    <div>
      <div className={homeStyle.background}>
        <div className={homeStyle.navigation}>
          <nav id="Navigation">
            <Navigation />
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
            <Resume />
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
