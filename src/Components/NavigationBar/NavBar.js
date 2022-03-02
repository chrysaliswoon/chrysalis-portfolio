import "./NavBar.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../../Components/Button/Button";

export default function NavBar(){
    return(
        <div className="NavBar">
        <AnchorLink href="#AboutMe">
          <Button name="About" />
        </AnchorLink>
        <AnchorLink href="#Experience">
          <Button name="Experience" />
        </AnchorLink>
        <AnchorLink href="#Projects">
          <Button name="Projects" />
        </AnchorLink>
        <AnchorLink href="#Contact">
          <Button name="Contact" />
        </AnchorLink>
      </div>
    )
}