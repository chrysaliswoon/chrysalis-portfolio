import "./homePage.css";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Experience from "../../Components/Experiences/Experience";
import Work from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import NavBar from "../../Components/NavigationBar/NavBar";
import Introduction from "../../Components/Introduction/Introduction";
import Footer from "../../Components/Footer/Footer"
// import SimpleForm from "../../Components/ChatBot/Chatbot";

export default function Website() {
  // console.log(process.env.REACT_APP_LOAD_INTRO)

  return (
    // Top Navigation Bar Section //
    <>
      <nav id="Navigation">
        <NavBar />
      </nav>

      {/* Main Page Section */}
      <section id="Introduction">
        <Introduction />
      </section>

      {/* About Me Page Section */}
      <section id="AboutMe">
        <AboutMe />
      </section>

      {/* My Experiences Page Section */}
      <section id="Experience">
        <Experience />
      </section>

      {/* My Projects Page Section */}
      <section id="Work">
        <Work />
      </section>

      {/* Contact Page Section  */}
      <section id="Contact">
        <Contact />
        {/* <SimpleForm /> */}
      </section>
      <section id="Footer">
      <Footer />
      </section>
    </>
  );
}
