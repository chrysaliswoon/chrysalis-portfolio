import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../../Components/Button/Button";


export default function Introduction() {
    return (
      <div className="MainPage">
          <h1>I'm Chrysalis</h1>
        <div className="Header">
          <p>Product Manager | Software Engineer | Tech Educator</p>
        </div>
        <div className="MainDescription">
          <p>I'm a programming instructor with more than 7 years experience in Product Management, Marketing, Business Development,  Education, and Tech. I am currently gaining industry experience in various areas of Product Management and Software Engineering. </p>
            <br></br>
            <p><b>Connect with me if you would like to talk about anything education or tech related</b></p>
            <br />
          <AnchorLink href="#Contact"><Button name="Connect!" /></AnchorLink>
        </div>
      </div>
    );
  }
  
  