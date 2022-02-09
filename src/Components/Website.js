import './Website.css';
import Button from './Button'
import HomePage from './HomePage';

export default function Website() {
  return (
    <div className="HomePage">
      <div className="NavBar">
        <Button name="About"/>
        <Button name="Experience"/>
        <Button name="Work"/>
        <Button name="Contact"/>
      </div>
      <div className="MainPage">
        <HomePage />
        <br></br>
        <Button name="Connect!"/>
      </div>
    </div>
  );
}

