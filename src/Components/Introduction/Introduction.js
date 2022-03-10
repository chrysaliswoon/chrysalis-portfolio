import introStyle from "./introduction.module.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../../Components/Button/Button";

export default function Introduction() {
  return (
    <div className="Introduction">
      <div className="MainPage">
        <h1>I'm Chrysalis</h1>
        <div className="Header">
          Product Manager | Software Engineer | Tech Educator
        </div>
        <div className={introStyle.introDesc}>
          <p>
            I'm a programming instructor with more than 7 years experience in
            Product Management, Marketing, Business Development, Education, and
            Tech. I am currently gaining industry experience in various areas of
            Product Management and Software Engineering.{" "}
          </p>
          <div className={introStyle.profile}>
            <img
              src="https://github.com/chrysaliswoon/chrysalis-portfolio/blob/main/src/Image%20Assets/Profile.png?raw=true"
              width="300"
              height="300"
              alt="Profile Picture"
            ></img>
          </div>
        </div>
        <div className={introStyle.connect}>
          <p>
              Connect with me if you would like to talk about anything education
              or tech related
          </p>
        </div>
        <div className={introStyle.buttonContact}>
            <AnchorLink href="#Contact">
              <Button name="Connect!" />
            </AnchorLink>
            </div>
      </div>
    </div>
  );
}
