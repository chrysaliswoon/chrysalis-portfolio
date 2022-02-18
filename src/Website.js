import './Components/Website.css';
import Button from './Components/Button'
import HomePage from './Components/HomePage';
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
import Work from './Components/Work'
import Contact from './Components/Contact'
import User from './Components/UserInput'
import Welcome from './Components/Welcome'


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

    {/* Welcome User Page */}
    <div className="WelcomePage">
      <Welcome />
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

