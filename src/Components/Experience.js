import "./Experience.css";
import Companies from "./Companies";
import Description from "./ExperienceDesc";

export default function Experiences() {

  return (
    <div className="Experience">
      <h1>My Journey</h1>
      <div className="Header">
        <p>A Brief History of My Work</p>
      </div>

      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <Companies />
        </nav>
        <Description />
      </div>
    </div>
  );
}
