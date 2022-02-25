import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Website from "./Website";
import ComingSoon from './Components/comingsoon'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Website /> */}
      <ComingSoon />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
