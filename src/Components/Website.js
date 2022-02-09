import './Website.css';
import Button from './Button'
import HomePage from './HomePage';
import AboutMe from './AboutMe'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'


export default function Website() {
  return (
    // Top Navigation Bar Section //
    <div className="HomePage">
      <div className="NavBar">
        <Button name="About"/>
        <Button name="Experience"/>
        <Button name="Work"/>
        <Button name="Contact"/>
      </div>
      
    {/* Main Page Section */}
      <div className="MainPage">
        <HomePage />
        <br></br>
        <Button name="Connect!"/>
      </div>

    {/* About Me Page Section */}
      <div className="AboutMePage">
        <AboutMe />
        <br></br>
        <Button name="Get My Resume!"/>
      </div>

    {/* My Experiences Page Section */}
      <div className="ExperiencePage">
        <Experience />
      </div>

    {/* My Projects Page Section */}
    <div className="ProjectPage">
      <Work />
    </div>

    {/* Contact Page Section  */}
    <div className="ContactPage">
      <Contact />
    </div>

    </div>
  );
}

