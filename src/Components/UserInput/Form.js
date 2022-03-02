import React, { useState } from 'react'

export default function Form({user}) {

   const [newUser, setNewUser] = useState(user)
   const [print, setPrint] = useState(false)

   const addUser = (event) => {
     event.preventDefault()
     console.log("Button Clicked", event.target)
   }

   const getUser =(event) => {
     console.log(event.target.value)
     setNewUser(event.target.value)
     setPrint(false)
   }

    return (
        <div className="Form">
          <form onSubmit={addUser}>
            <input 
            value={newUser}
            onChange={getUser}
            />
            <button onClick={()=>setPrint(true)}>Submit</button>
            {
              print?
              <p>Hi {newUser}! It's nice to meet you!</p>
              :null
              
            }
          </form>
        </div>

    );
  }
  