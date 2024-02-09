import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.ts";
import { BrowserRouter } from "react-router-dom";

const onPerfEntry = (entry: any) => {
  if (entry.name === "navigation") {
    const { domContentLoaderEventEnd, loadEventEnd } = entry;
    console.log(loadEventEnd, domContentLoaderEventEnd);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(onPerfEntry);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
