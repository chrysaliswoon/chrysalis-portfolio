import "./Form.css"
import React, { useState } from 'react'
import WelcomeUser from '../../Pages/Welcome/WelcomeUser';

export default function Form() {
  const [name, setName] = useState("")
  console.log(name)

  const handleClick = (event) => {
    event.preventDefault()
  }
   
    return (
        <div className="InputStyle">
          <form onSubmit={handleClick}>
            <input 
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>

    );
}
