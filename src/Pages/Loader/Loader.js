import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function LoadingPage() {
  const [isLoading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState()

  useEffect(() => {
    axios.get("https://api.quotable.io/random?maxLength=50")
    .then(response => {
      setQuotes(response.data)
      console.log(response.data)
      setLoading(false)
    })
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>
  }

    return (
        <div className="Header">
          <div>
              <li key={quotes._id}>
                  <p>"{quotes.content}"</p> 
                  - {quotes.author}
              </li>
          </div>
        </div>
    );
  }