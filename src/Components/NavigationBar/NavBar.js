import "./NavBar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  return (
    <div className="navigation">
      <ul className="navList">
        <AnchorLink href="#AboutMe">
          <li className="about">About</li>
        </AnchorLink>
        <AnchorLink href="#Experience">
          <li className="experience">Experience</li>
        </AnchorLink>
        <AnchorLink href="#Work">
          <li className="projects">Projects</li>
        </AnchorLink>
        <AnchorLink href="#Contact">
          <li className="contact">Contact</li>
        </AnchorLink>
      </ul>
    </div>
  );
}
