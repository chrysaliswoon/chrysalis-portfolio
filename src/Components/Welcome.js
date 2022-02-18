import UserInput from "./UserInput";

export default function Welcome() {

    return (
      <div className="Welcome">
      <h1>WELCOME!</h1>
      
    <div className="Header">
      <p>How do I address you?</p>
      <UserInput />
    </div>
      </div>
    );
  }
  
  