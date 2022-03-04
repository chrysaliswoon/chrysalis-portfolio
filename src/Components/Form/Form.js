import React, { useState } from 'react'
import { Route, useNavigate } from 'react-router'

export default function Form({user}) {
  const navigate = useNavigate()

   const [newUser, setNewUser] = useState(user)

   const addUser = (event) => {
     event.preventDefault()
   }

   const getUser =(event) => {
     event.preventDefault()
     setNewUser(event.target.value)
    //  console.log(newUser)
   }
   

    return (
        <div className="Form">
          <form onSubmit={addUser}>
            <input 
            value={newUser}
            onChange={getUser}
            />
          </form>
        </div>

    );
}
