import './Components/Website.css';
import { Outlet, Link } from 'react-router-dom';

import Button from './Components/Button'
import HomePage from './Components/HomePage';
import AboutMe from './Components/About'
import Experience from './Routes/Experience'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Welcome from './Components/Welcome'


export default function Website() {
  return (
    // Top Navigation Bar Section //
    <div className="HomePage">
      <div className="NavBar">
        <Link to='./About'><Button name="About"/></Link>
        <Link to='./Experience'><Button name="Experience"/></Link>
        <Link to='./Work'><Button name="Work"/></Link>
        <Link to='./Contact'><Button name="Contact"/></Link>
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

    <Outlet />
    </div>
  );
}

