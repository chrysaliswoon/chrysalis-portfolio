import React, { useState } from 'react'

export default function Welcome(props) {
    const [name, setName] = useState({name:''})

    const handleClick = () => {
        props.handleSubmit(name)
        setName({name:''})
    }

    const handleChange = (event)=> {
        const inputName = event.target.name
        const inputValue = event.target.value

        setName({
            ...name,
            [inputName]: inputValue
        })
    }

    return (
      <div className="Welcome">
          <h1>WELCOME!</h1>
          
        <div className="Header">
          <p>How do I address you?</p>
        </div>
        
        <div className="userInput">
          <input
          onChange={handleChange}
          value={name}
          type="text"
          className="form-control"
          name="name"
          placeholder="Input your name"
          />
        </div>

        <button onClick={() => handleClick()}>Submit</button> 
      </div>
    );
  }
  