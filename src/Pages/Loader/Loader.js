import loaderStyle from "./Loader.module.css"
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
    }, 5000);
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
      <div className={loaderStyle.sweetLoading}>
        <RingLoader color={"#123abc"} />
      </div>
    );
  }

  return (
      <div className={loaderStyle.Quote}>
        <article className={loaderStyle.QuoteHeader}>
          <blockquote className={loaderStyle.blockquote}>
            <li key={quotes._id}>
              <strong><em>{quotes.content}</em></strong>
              </li>
          </blockquote>
              <b>{quotes.author}</b>
        </article>
      </div>
  );
}
