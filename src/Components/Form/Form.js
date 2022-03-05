import "./Form.css"
import React from 'react'

export default function Form({name, setName}) {

  // console.log(name)
  // console.log(process.env.REACT_APP_LOAD_INTRO)

  const handleClick = (e) => {
    e.preventDefault()
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
