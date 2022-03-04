import Form from '../../Components/Form/Form'
import { useNavigate } from 'react-router'

export default function Introduction() {
  const navigate = useNavigate()

    return (
      <div className="Welcome">
      <h1>WELCOME!</h1>
      
    <div className="Header">
      <p>How do I address you?</p>
      <Form />
      
      <button onClick={() => navigate('/welcome')}>Submit</button>
    </div>
      </div>
    );
  }
  
  