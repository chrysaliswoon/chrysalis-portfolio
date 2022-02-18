import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Work() {

  // const [work, setWork] = useState({name:''})

  //   const handleClick = () => {
  //       axios.get(`https://api.github.com/users/chrysaliswoon/repos`)
  //       .then(res => {
  //       console.log(res.data[0].description)

  //       (res.data.data[0].url)
  //   } )
  //      setWork({name:''})
  //   }
  //   const handleChange = (event) => {
  //       const inputName = event.target.name
  //       const inputValue = event.target.value

  //      setWork(
  //           event.target.value

  //       )
  //   }

    // const apiUrl = "https://api.github.com/users/chrysaliswoon/repos"

    return (
      <div className="Work">
          <h1>Projects</h1>
        <div className="Header">
          <p>Explore My Work</p>
        </div>

          {/* <button onClick={() => handleClick()}>Generate API call</button> */}
      </div>
    );
  }
  