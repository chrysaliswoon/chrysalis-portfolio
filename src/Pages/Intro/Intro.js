import "./Intro.css";
import { useNavigate } from "react-router";
import Form from "../../Components/Form/Form";

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div className="bg text-center">
      <div className="centered">
        <h1 className="firstLine">WELCOME!</h1>
        <p className="secondLine">Glad you could stop by! What's your name?</p>
          <Form />
          <button className = "btn" onClick={() => navigate("/welcome")}>Submit</button>
      </div>
    </div>
  );
}
