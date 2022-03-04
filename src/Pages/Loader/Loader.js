import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"


export default function LoadingPage() {
  const [isLoading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState()
  const navigate = useNavigate()


  useEffect(() => {
    axios.get("https://api.quotable.io/random?maxLength=50")
    .then(response => {
      setQuotes(response.data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
        // console.log('1 second passed')
        navigate('/home')
    }, 3000)
    return () => clearTimeout(timer)
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