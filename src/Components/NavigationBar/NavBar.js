import "./NavBar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <AnchorLink href="#AboutMe">
                <li className="navlist">
                  <span className="hoverAbout">About</span>
                </li>
              </AnchorLink>
              <AnchorLink href="#Experience">
                <li className="navlist">
                  <span className="hoverExperience">Experience</span>
                </li>
              </AnchorLink>
              <AnchorLink href="#Projects">
                <li className="navlist">
                  <span className="hoverProjects">Projects</span>
                </li>
              </AnchorLink>
              <AnchorLink href="#Contact">
                <li className="navlist">
                <span className="hoverContact">Contact</span>
                </li>
              </AnchorLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
