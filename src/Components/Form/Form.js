import React, { useState } from 'react'
import reactDom from 'react-dom'

export default function Form({user}) {

   const [newUser, setNewUser] = useState(user)

   const addUser = (event) => {
     event.preventDefault()
   }

   const getUser =(event) => {
     event.preventDefault()
     setNewUser(event.target.value)
     console.log(newUser)
   }
   

    return (
        <div className="Form">
          <form onSubmit={addUser}>
            <input 
            value={newUser}
            onChange={getUser}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

    );
}
