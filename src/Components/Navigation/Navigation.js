// import "./NavBar.css";
import navStyle from "./navigation.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  return (
    <div>
      <ul className={navStyle.navList}>
        <AnchorLink href="#AboutMe">
          <li className={navStyle.about}>About</li>
        </AnchorLink>
        <AnchorLink href="#Experience">
          <li className={navStyle.experience}>Experience</li>
        </AnchorLink>
        <AnchorLink href="#Work">
          <li className={navStyle.projects}>Projects</li>
        </AnchorLink>
        <AnchorLink href="#Contact">
          <li className={navStyle.contact}>Contact</li>
        </AnchorLink>
      </ul>
    </div>
  );
}
