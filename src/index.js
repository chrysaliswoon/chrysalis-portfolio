import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Website from "./Website";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
