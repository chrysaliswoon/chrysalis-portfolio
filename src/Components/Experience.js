import jobExperience from "./Data";

export default function Experiences() {
  let experiences = jobExperience();

  function handleClick(e) {
    e.preventDefault();
    console.log(experiences);
  }

  return (
    <div className="Welcome">
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
          {experiences.map((experience) => (
            <li key={experience.id}>
              <a onClick={handleClick} style={{ cursor: "pointer" }}>
                {experience.company}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
}
