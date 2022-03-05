import "./Loader.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { RingLoader } from "react-spinners";

export default function LoadingPage() {
  const [isLoading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('1 second passed')
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random?maxLength=50")
      .then((response) => {
        setQuotes(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="sweet-loading">
        <RingLoader color={"#123abc"} />
      </div>
    );
  }

  return (
      <div className="Quote">
        <div className="Header">
          <blockquote className="blockquote text-center text-success">
            <li key={quotes._id}>
              <p>"{quotes.content}"</p>
              <footer className="blockquote-footer">- {quotes.author}</footer>
            </li>
          </blockquote>
        </div>
      </div>
  );
}
